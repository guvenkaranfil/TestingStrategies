import {isEmailValid} from '../validations';

describe('Validations', () => {
  test('should email validation return false for unvalid email', () => {
    expect(isEmailValid('email.com')).toBe(false);
  });

  test('should email validation return true for valid email', () => {
    expect(isEmailValid('email@email.com')).toBe(true);
  });
});
