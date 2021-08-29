import React from 'react';
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';

import SignInForm from '../SignInForm';

describe('SignInForm Component', () => {
  test('should signIn with valid user credentials', async () => {
    const signInButton = /giriş yap/i;
    const {getByPlaceholderText, getByText} = render(<SignInForm />);

    fireEvent.changeText(getByPlaceholderText(/e-mail/i), 'email@email.com');
    fireEvent.changeText(getByPlaceholderText(/şifre/i), '1234');
    fireEvent.press(getByText(signInButton));
    await waitForElementToBeRemoved(() => getByText(signInButton));

    expect(getByText(/hoşgeldin!/i)).toBeTruthy();
  });

  test('should show error message with invalid user credentials', async () => {
    const signInButton = /giriş yap/i;
    const errorMessage = /bir sorun oluştu!/i;
    const {getByPlaceholderText, getByText} = render(<SignInForm />);

    fireEvent.changeText(getByPlaceholderText(/e-mail/i), 'email@email.com');
    fireEvent.changeText(getByPlaceholderText(/şifre/i), '');
    fireEvent.press(getByText(signInButton));

    expect(getByText(errorMessage)).toBeTruthy();

    fireEvent.changeText(getByPlaceholderText(/e-mail/i), '');
    fireEvent.changeText(getByPlaceholderText(/şifre/i), '1234');

    expect(getByText(errorMessage)).toBeTruthy();

    fireEvent.changeText(getByPlaceholderText(/e-mail/i), '');
    fireEvent.changeText(getByPlaceholderText(/şifre/i), '');

    expect(getByText(errorMessage)).toBeTruthy();
  });
});
