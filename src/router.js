import express from 'express';
import PostRoute from './routes/post';

const apiRouter = express.Router();

// initialize the user routes
const postRoute = new PostRoute(apiRouter);
postRoute.PostRoutes(apiRouter);


export default apiRouter;
