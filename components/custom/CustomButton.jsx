import { Text, TouchableOpacity, View } from 'react-native';

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.3,
  shadowRadius: 5,

  elevation: 2,
};

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-violet-700 rounded-lg py-2 px-4 my-4"
      style={shadow}
    >
      <Text className="text-center text-white text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
