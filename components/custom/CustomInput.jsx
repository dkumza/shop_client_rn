import { View, Text, TextInput } from 'react-native';

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.3,
  shadowRadius: 5,

  elevation: 1,
};
const CustomInput = ({ text, protect }) => {
  return (
    <View className="justify-end gap-1 mb-2">
      <Text className="px-1 text-violet-800">{text}</Text>
      <TextInput
        className={`border border-violet-400 bg-violet-50 rounded-lg py-2 px-4`}
        style={shadow}
        keyboardType="default"
        secureTextEntry={protect}
        selectionColor="#4c1d95"
      />
    </View>
  );
};
export default CustomInput;
