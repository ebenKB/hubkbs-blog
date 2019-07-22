import UserController from '../controller/user';
import Serializer from '../serializer/user';
import Auth from '../controller/auth';

class UserRoute {
  constructor(apiRouter) {
    this.router = apiRouter;
    this.UserRoutes();
  }

  UserRoutes() {
    this.router.get('/v1/users', (req, res) => {
      UserController.getUsers()
        .then((users) => {
          // const jsonapiData = Serializer.serialize(data);
          res.status(200).send({ users });
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    });

    this.router.post('/v1/users/confirm/:token', (req, res) => {
      const { token } = req;
      Auth.verifyToken(token)
        .then(() => {
          console.log('the token has been verified');
        }).catch((err) => {
          console.log('an eerror occured while verifying the token', err);
        });
      res.send({ token });
    });

    this.router.get('/v1/users/confirm/:token', async (req, res) => {
      const { token } = req.params;
      try {
        const user = await Auth.verifyToken(token);
        user.status = 1;
        user.save();
        res.redirect('https://hubkbs-blogs.herokuapp.com/login');
      } catch (err) {
        console.log('an eerror occured while verifying the token', err.message);
      }
      // redirect the user to the front end
      // res.send({ token });
    });

    this.router.get('/v1/users/:id', (req, res) => {
      UserController.getUser(req.params.id)
        .then((user) => {
          // const jsonapiData = Serializer.serialize(user);
          res.status(200).json({ user });
        })
        .catch(() => {
          res.status(500).json('sorry! an error occured while fetching records');
        });
    });

    this.router.post('/v1/users', (req, res) => {
      const { user } = req.body;
      UserController.createUser(user)
        .then((data) => {
          res.json({ user: data });
        })
        .catch((err) => {
          res.status(500).json({ err });
        });
    });

    this.router.put('/v1/user', (req, res) => {
      const { user } = req.body;
      UserController.updateUser(user)
        .then((data) => {
          const jsonapiData = Serializer.serialize(data);
          res.status(200).send(jsonapiData);
        })
        .catch((err) => {
          res.status(500).json({ err });
        });
    });

    this.router.delete('/v1/user', (req, res) => {
      UserController.deleteUser({ req })
        .then((data) => {
          const jsonapiData = Serializer.serialize(data);
          res.status(200).json(jsonapiData);
        })
        .catch((err) => {
          res.status(500).json({ err });
        });
    });
  }
}

export default UserRoute;
