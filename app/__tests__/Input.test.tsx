import React from 'react';
import Input from '../Input';
import {render} from '@testing-library/react-native';

describe('Input Component', () => {
  test('should render error when there is an error message', () => {
    const errorMessage = 'E-Mail is not valid';
    const {getByText} = render(
      <Input placeholder={errorMessage} error={errorMessage} />,
    );

    expect(getByText(errorMessage)).toBeTruthy();
  });
});
