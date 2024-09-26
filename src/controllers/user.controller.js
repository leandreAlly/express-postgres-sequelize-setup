import { UserService } from '../services/user.service';

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await UserService.createUser({ name, email });

    res.status(201).json({
      message: 'User created successfully',
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      message: 'something went wrong while creating user',
      error: err.message,
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();

    res.status(200).json({
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      message: 'something went wrong while fetching users',
      error: err.message,
    });
  }
};
