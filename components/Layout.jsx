import { ActivityIndicator, Text, View } from 'react-native';
import Login from './pages/auth/Login';
import { useAuthContext } from '../context/AuthContext';
import Home from './pages/Home';

export const Layout = () => {
  const { isUserLogged, username } = useAuthContext();
  console.log('isUserLogged: ', isUserLogged);
  return (
    <View className="flex-1 px-4 py-8">
      {/* <ActivityIndicator size={'large'} color="#7c3aed" /> */}
      {!isUserLogged && <Login />}
      {isUserLogged && <Home />}
    </View>
  );
};
