import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView } from 'react-native';
import { Layout } from './components/Layout';
import { AuthCtxProvider } from './context/AuthContext';
import { ProductContextProvider } from './context/ProductContext';

export default function App() {
  return (
    <AuthCtxProvider>
      <ProductContextProvider>
        <View className="flex-1 bg-violet-50 w-full">
          <Layout />
          <StatusBar style="auto" />
        </View>
      </ProductContextProvider>
    </AuthCtxProvider>
  );
}
