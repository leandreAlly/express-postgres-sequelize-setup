import { ProjectService } from '../services/project.service';

export const createProject = async (req, res) => {
  try {
    const { name, description, userId } = req.body;

    const project = await ProjectService.createProject({
      name,
      description,
      userId,
    });

    res.status(201).json({
      message: 'Project created successfully',
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      message: 'something went wrong while creating project',
      error: err.message,
    });
  }
};

export const getProjectsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const projects = await ProjectService.getProjectsByUserId(userId);

    res.status(200).json({
      data: projects,
    });
  } catch (err) {
    res.status(500).json({
      message: 'something went wrong while fetching projects',
      error: err.message,
    });
  }
};
