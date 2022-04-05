import UserController from '../controllers/UserControllers';

const makeUserController = (): UserController => new UserController();

export default makeUserController;
