import { StyleSheet, Text, TextInput, View } from 'react-native';

const shadow = {
  borderWidth: 1,
  borderRadius: 8,
  borderColor: 'gray',
  backgroundColor: '#fdf7ff',
  // shadowColor: '#78747e',
  // shadowOffset: {
  //   width: 0,
  //   height: 2,
  // },
  // shadowOpacity: 0.1,
  // shadowRadius: 4,
  // elevation: 3,
};

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

    ...shadow,
  },
});
