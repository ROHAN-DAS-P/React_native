import React from 'react';
import { AuthProvider } from './src/auth/AuthContext';
import { TaskProvider } from './src/tasks/TaskContext';
import AuthNavigator from './src/navigation/AuthNavigator';

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
