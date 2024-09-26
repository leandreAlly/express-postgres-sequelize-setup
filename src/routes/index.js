import express from 'express';
import userRouter from './api/user.routes';

const routes = express.Router();

routes.use('/users', userRouter);

export default routes;
