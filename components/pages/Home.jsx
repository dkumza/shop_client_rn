import { StyleSheet, Text, View } from 'react-native';
import { useAuthContext } from '../../context/AuthContext';
const Home = () => {
  // console.log(username);
  const { username } = useAuthContext();
  return (
    <View>
      <Text>{username}</Text>
    </View>
  );
};
export default Home;
// const styles = StyleSheet.create({});
