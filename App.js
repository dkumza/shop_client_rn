import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthCtxProvider } from './components/context/AuthCtx';

export default function App() {
  return (
    <AuthCtxProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    </AuthCtxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
