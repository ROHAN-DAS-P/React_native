import React, { useState } from 'react';
import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';

const AuthNavigator = () => {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
    <LoginScreen onSwitch={() => setIsLogin(false)} />
  ) : (
    <RegisterScreen onSwitch={() => setIsLogin(true)} />
  );
};

export default AuthNavigator;
