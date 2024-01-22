import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';
import { useAuthCtx } from '../context/AuthCtx';
import { Login } from '../login/Login';

export const Layout = () => {
  const { isUserLogged } = useAuthCtx();
  return (
    <SafeAreaView style={styles.container}>
      {/* <ActivityIndicator size="large" color="#4592af" /> */}
      {true && <Login />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    flex: 1,
  },
});
