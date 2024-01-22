import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView } from 'react-native';
import { Layout } from './components/Layout';
import { AuthCtxProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthCtxProvider>
      <View className="flex-1 bg-violet-50">
        <Layout />
        <StatusBar style="auto" />
      </View>
    </AuthCtxProvider>
  );
}
