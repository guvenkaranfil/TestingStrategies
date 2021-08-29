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
});
