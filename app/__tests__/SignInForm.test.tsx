import React from 'react';
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';

import SignInForm from '../SignInForm';

const EMAIL_INPUT = /e-mail/i;
const PASSWORD_INPUT = /şifre/i;
const SIGNIN_BUTTON = /giriş yap/i;
const WELCOME_MESSAGE = /hoşgeldin!/i;

describe('SignInForm Component', () => {
  test('should signIn with valid user credentials', async () => {
    const {getByPlaceholderText, getByText} = render(<SignInForm />);

    fireEvent.changeText(getByPlaceholderText(EMAIL_INPUT), 'email@email.com');
    fireEvent.changeText(getByPlaceholderText(PASSWORD_INPUT), '1234');
    fireEvent.press(getByText(SIGNIN_BUTTON));
    await waitForElementToBeRemoved(() => getByText(SIGNIN_BUTTON));

    expect(getByText(WELCOME_MESSAGE)).toBeTruthy();
  });

  test('should show error message with invalid user credentials', async () => {
    const errorMessage = /bir sorun oluştu!/i;
    const {getByPlaceholderText, getByText} = render(<SignInForm />);

    fireEvent.changeText(getByPlaceholderText(EMAIL_INPUT), 'email@email.com');
    fireEvent.changeText(getByPlaceholderText(PASSWORD_INPUT), '');
    fireEvent.press(getByText(SIGNIN_BUTTON));

    expect(getByText(errorMessage)).toBeTruthy();

    fireEvent.changeText(getByPlaceholderText(EMAIL_INPUT), '');
    fireEvent.changeText(getByPlaceholderText(PASSWORD_INPUT), '1234');

    expect(getByText(errorMessage)).toBeTruthy();

    fireEvent.changeText(getByPlaceholderText(EMAIL_INPUT), '');
    fireEvent.changeText(getByPlaceholderText(PASSWORD_INPUT), '');

    expect(getByText(errorMessage)).toBeTruthy();
  });
});
