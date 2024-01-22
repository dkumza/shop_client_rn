import { ActivityIndicator, Text, View } from 'react-native';
import Login from './auth/Login';

export const Layout = () => {
  return (
    <View className="flex-1 px-4 py-8">
      {/* <ActivityIndicator size={'large'} color="#7c3aed" /> */}
      <Login />
    </View>
  );
};
