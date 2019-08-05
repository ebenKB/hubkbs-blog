import express from 'express';
import PostRoute from './routes/post';
import CommentRoute from './routes/comment';
import UserRoute from './routes/user';
import CatRoute from './routes/category';
import AuthRoute from './routes/auth';
import PasswordRoute from './routes/password';

const apiRouter = express.Router();

// initialize the user routes
const postRoute = new PostRoute(apiRouter);
const commentRoute = new CommentRoute(apiRouter);
const userRoute = new UserRoute(apiRouter);
const catRoute = new CatRoute(apiRouter);
const authRoute = new AuthRoute(apiRouter);
const passwordRoute = new PasswordRoute(apiRouter);

postRoute.PostRoutes();
commentRoute.CommentRoutes();
userRoute.UserRoutes();
catRoute.CategoryRoutes();
authRoute.AuthRoutes();
passwordRoute.PasswordRoutes();

export default apiRouter;
