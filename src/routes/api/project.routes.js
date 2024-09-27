import express from 'express';
import {
  createProject,
  getProjectsByUserId,
} from '../../controllers/project.controller';

const projectRouter = express.Router();

projectRouter.post('/', createProject);
projectRouter.get('/:userId', getProjectsByUserId);

export default projectRouter;
