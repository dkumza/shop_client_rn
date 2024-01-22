import { Text, View } from 'react-native';
import CustomInput from '../custom/CustomInput';
import CustomButton from '../custom/CustomButton';
import { useAuthContext } from '../../context/AuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const { login } = useAuthContext();

  return (
    <View className="flex-1 justify-end">
      <View className=" mb-8">
        <Text className="text-center text-5xl justify-end text-violet-700">Login</Text>
      </View>
      <View className="">
        <CustomInput text="Enter Email" />
        <CustomInput text="Enter Password" protect={true} />
        <CustomButton text="Login" />
        <Text
          onPress={() => {
            console.log('clicked');
          }}
          className="text-right text-violet-500"
        >
          Don't have account? Sign Up
        </Text>
      </View>
    </View>
  );
}
