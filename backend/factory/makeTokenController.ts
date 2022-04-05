import TokenController from '../controllers/TokenController';
import JWTService from '../services/JWTAdapter';

const makeTokenController = (): TokenController => {
  const webTokenService = new JWTService();
  return new TokenController(webTokenService);
};

export default makeTokenController;
