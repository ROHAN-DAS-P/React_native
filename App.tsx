// import React from 'react';
// import { AuthProvider } from './src/auth/AuthContext';
// import { TaskProvider } from './src/tasks/TaskContext';
// import AuthNavigator from './src/navigation/AuthNavigator';

// const App = () => {
//   return (
//     <AuthProvider>
//       <TaskProvider>
//         <AuthNavigator />
//       </TaskProvider>
//     </AuthProvider>
//   );
// };

// export default App;


import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AuthProvider, useAuth } from './src/auth/AuthContext';
import { TaskProvider } from './src/tasks/TaskContext';
import AuthNavigator from './src/navigation/AuthNavigator';
import AppNavigator from './src/navigation/AppNavigator';

const RootNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return user ? <AppNavigator /> : <AuthNavigator />;
};

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <RootNavigator />
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
