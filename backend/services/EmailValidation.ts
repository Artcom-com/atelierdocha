import { validateEmail } from '../../src/utils/validations';
import { EmailValidatorAdapter } from '../adapters/EmailValidatinAdapter';

export default class EmailValidation implements EmailValidatorAdapter {
  isEmail(email: string) {
    return validateEmail(email);
  }
}
