import express from 'express';
import projectRouter from './api/project.routes';
import userRouter from './api/user.routes';

const routes = express.Router();

routes.use('/users', userRouter);
routes.use('/projects', projectRouter);

export default routes;
