import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import Input from './Input';
import {isEmailValid} from './validations';

export default function SignInForm() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [isLoginSuccessfull, setisLoginSuccessfull] = useState(false);
  const [hasApiError, sethasApiError] = useState<string>();

  const handleLogin = () => {
    if (isEmailValid(email) && password?.length) {
      setTimeout(() => {
        setisLoginSuccessfull(true);
      }, 10); // act like waiting response
    } else {
      sethasApiError('Bir sorun oluştu!');
    }
  };

  if (isLoginSuccessfull) {
    return (
      <>
        <Text>Hoşgeldin!</Text>
      </>
    );
  }

  return (
    <>
      <Input
        testId={'email-input'}
        placeholder="E-Mail"
        value={email}
        onChangeText={setemail}
      />
      <Input
        testId="password-input"
        placeholder="Şifre"
        value={password}
        onChangeText={setpassword}
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Giriş Yap</Text>
      </TouchableOpacity>
      {hasApiError && <Text>{hasApiError}</Text>}
    </>
  );
}
