import { ActivityIndicator, Text, View } from 'react-native';
import Login from './pages/auth/Login';
import { useAuthContext } from '../context/AuthContext';
import ProductsPage from './pages/products/ProductsPage';

export const Layout = () => {
  const { isUserLogged, username } = useAuthContext();

  return (
    <View className="flex-1 pt-8">
      {/* <ActivityIndicator size={'large'} color="#7c3aed" /> */}
      {!isUserLogged && <Login />}
      {isUserLogged && username && <ProductsPage />}
    </View>
  );
};
