/* eslint-disable no-underscore-dangle */
import PostController from '../controller/post';
import Serializer from '../serializer/post';
import Upload from '../util/fileUpload';
import s3Upload from '../util/s3Uploader';

class PostRoute {
  constructor(apiRouter) {
    this.router = apiRouter;
    this.PostRoutes();
  }

  PostRoutes() {
    this.router.get('/v1/posts', async (req, res) => {
      const post = await PostController.getPosts();
      // const jsonapiData = Serializer.serialize(posts);
      res.status(200).json({ post });
    });

    this.router.get('/v1/posts/:id', async (req, res) => {
      const { id } = req.params;
      const post = await PostController.getPost(id);
      // serialize the response
      // const jsonapiData = Serializer.serialize(posts);
      res.status(200).json({ post });
    });

    this.router.post('/v1/posts', async (req, res) => {
      try {
        const reqData = await (Upload(req, res, 'post[image]'));
        // get the post from the req body
        const newPost = reqData.body.post;
        const data = await s3Upload.uploadToS3(reqData.file.path, reqData.file.filename);
        newPost.image = data.Location;

        // creat a new post
        PostController.createPost(newPost)
          .then((post) => {
            res.status(200).send({ post });
          }).catch((err) => {
            console.log('error while creating post', err);
          });
      } catch (err) {
        res.status(501).json({ err });
      }
    });

    this.router.put('/v1/posts/:id', async (req, res) => {
      // pass the request through multer to extract out the multipart form data
      const reqData = await (Upload(req, res, 'post[image]'));
      const { post } = reqData.body;
      if (!post.likes) {
        post.likes = [];
      }
      if (reqData.file) {
        const data = await s3Upload.uploadToS3(reqData.file.path, reqData.file.file.filename);
        post.image = data.Location;
      }

      PostController.updatePost(req.params.id, post)
        .then((created) => {
          // console.log('this is what was updated', created);
          res.status(200).json({ post: created });
        })
        .catch((err) => {
          res.status(501).json({ err });
        });
    });

    this.router.delete('/v1/posts/:id', async (req, res) => {
      console.log('we want to delete a post');
    });
  }

  static sendSuccess(data, res) {
    const jsonapiData = Serializer.serialize(data);
    res.status(200).json(jsonapiData);
  }

  static reportError(msg, res) {
    res.status(500).json(msg);
  }
}


export default PostRoute;
