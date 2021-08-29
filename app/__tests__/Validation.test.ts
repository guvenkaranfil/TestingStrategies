import {isEmailValid} from '../validations';

describe('Validations', () => {
  test('should email validation return false for unvalid email', () => {
    expect(isEmailValid('email.com')).toBe(false);
  });
});
