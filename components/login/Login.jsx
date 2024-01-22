import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { CustomInput } from '../inputs/CustomInput';
import { CustomButton } from '../inputs/CustomButton';

export const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.inputs}>
        <CustomInput title="Email address" />
        <CustomInput title="Password" isHidden={true} />
        <CustomButton />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    // gap: 5,
    // borderWidth: 2
  },
  title: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
  },

  inputs: {
    gap: 15,
  },
});
