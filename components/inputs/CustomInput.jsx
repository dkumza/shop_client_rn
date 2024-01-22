import { StyleSheet, Text, TextInput, View } from 'react-native';

const shadow = {};

export const CustomInput = ({ title, isHidden }) => {
  return (
    <View>
      <Text style={{ marginBottom: 5, paddingHorizontal: 6 }}>{title}</Text>
      <TextInput
        style={styles.inp}
        keyboardType="default"
        secureTextEntry={isHidden}
        selectionColor="#6353a1"
        // value={amount}
        // onChangeText={setAmount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inp: {
    // alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    fontSize: 16,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
    backgroundColor: '#fdf7ff',
  },
});
