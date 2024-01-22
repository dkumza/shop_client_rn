import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useAuthContext } from '../../context/AuthContext';
const Home = () => {
  const { username } = useAuthContext();
  return (
    <View>
      <View className="flex justify-center items-start ">
        <View>
          <Text className="text-center text-xl py-2 text-violet-700">Products page</Text>
        </View>
        <View className=" flex-row justify-end w-full absolute my-2 ">
          {/* <View className="">
          <Text className="text-right p-2">Hi, {username}!</Text>
        </View> */}
          <View className=" rounded-lg bg-violet-500 h-10 w-10 justify-center items-center mr-2">
            <Text className=" text-white text-lg">0</Text>
          </View>
          <View className="border rounded-lg border-violet-500 h-10 w-10 justify-center items-center">
            <Text className=" text-violet-700 text-lg">M</Text>
          </View>
        </View>
      </View>
      <View>
        <TextInput
          className="py-2 px-4 border my-4 rounded border-violet-700"
          placeholder="Search for product"
        ></TextInput>
      </View>
    </View>
  );
};
export default Home;
