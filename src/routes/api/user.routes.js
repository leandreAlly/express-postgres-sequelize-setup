import express from 'express';
import { createUser, getAllUsers } from '../../controllers/user.controller';

const userRouter = express.Router();

userRouter.post('/register', createUser);
userRouter.get('/', getAllUsers);

export default userRouter;
