import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import { TaskProvider } from './tasks/TaskContext';
import AuthNavigator from './navigation/AuthNavigator';

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <AuthNavigator />
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
