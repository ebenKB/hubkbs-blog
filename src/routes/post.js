import PostController from '../controller/post';
import Serializer from '../serializer/post';

class PostRoute {
  constructor(apiRouter) {
    this.router = apiRouter;
    this.PostRoutes();
  }

  PostRoutes() {
    this.router.get('/v1/posts', async (req, res) => {
      const posts = await PostController.getPosts();
      const jsonapiData = Serializer.serialize(posts);
      res.status(200).json(jsonapiData);
    });

    this.router.get('/v1/post/:id', async (req, res) => {
      console.log('we are getting a post with an id ');
      const { id } = req.params;
      const post = await PostController.getPost(id);
      // serialize the response
      const jsonapiData = Serializer.serialize(post);
      res.status(200).json(jsonapiData);
    });

    this.router.post('/v1/posts', async (req, res) => {
      console.log('we want to create a post');
    });

    this.router.put('/v1/posts/:id', async (req, res) => {
      console.log('we want to edit a post');
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
