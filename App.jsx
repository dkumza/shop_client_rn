import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView } from 'react-native';
import { Layout } from './components/Layout';
import { AuthCtxProvider } from './context/AuthContext';
import { ProductContextProvider } from './context/ProductContext';
import { NavigationContainer } from '@react-navigation/native';
import SingleProductPage from './components/pages/products/SingleProductPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthCtxProvider>
      <ProductContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Layout" component={Layout} options={{ headerShown: false }} />
            <Stack.Screen
              name="SingleProductPage"
              component={SingleProductPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </ProductContextProvider>
    </AuthCtxProvider>
  );
}
