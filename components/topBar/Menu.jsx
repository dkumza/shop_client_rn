import { View, Text } from 'react-native';
import { useAuthContext } from '../../context/AuthContext';
import DropDown from './DropDown';

export default function Menu() {
  const { username } = useAuthContext();

  console.log('username: ', username);

  return (
    <View>
      <View className="flex justify-center items-start relative">
        <View className="px-4">
          <Text className="text-center text-xl py-2 text-violet-700">Shopping</Text>
        </View>
        <View className=" flex-row justify-end w-full absolute my-2 ">
          {!username !== 'admin' && (
            <View className=" rounded-lg bg-violet-700 h-10 w-10 justify-center items-center mr-16">
              <Text className=" text-white text-lg">0</Text>
            </View>
          )}
          <DropDown />
        </View>
      </View>
    </View>
  );
}
