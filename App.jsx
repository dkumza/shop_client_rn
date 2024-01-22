import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { AuthCtxProvider } from './components/context/AuthCtx';
import { Layout } from './components/layout/Layout';

export default function App() {
  return (
    <AuthCtxProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" translucent />
        <Layout />
        {/* <Text>TEST</Text> */}
      </SafeAreaView>
    </AuthCtxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#fdf7ff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
