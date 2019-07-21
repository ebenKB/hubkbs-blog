import UserController from '../controller/user';
import Serializer from '../serializer/user';

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
      console.log('we have to confirm our email here', req.token);
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
