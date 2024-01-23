import { Text, View } from 'react-native';
import CustomInput from '../../custom/CustomInput';
import CustomButton from '../../custom/CustomButton';
import { useAuthContext } from '../../../context/AuthContext';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LOGIN_URL = 'http://10.0.2.2:3000/api/auth/login';

export default function Login() {
  const { login } = useAuthContext();

  const axiosLogin = (loginInfo) => {
    console.log('loginInfo ', loginInfo);
    axios
      .post(LOGIN_URL, loginInfo)
      .then((res) => {
        const { token, username } = res.data;
        if (token && username) {
          // console.log('token && username: ', token, username);
          login(token, username);
        }
      })
      .catch((error) => {
        // console.log('error: ', error);
        // addMsg('bg-red-200', `${error.response.data.error}`);
        const errorFromAPI = error.response.data;
        console.log('errorFromAPI: ', errorFromAPI);
      });
  };

  return (
    <View className="flex-1 justify-end px-4">
      <View className=" mb-8">
        <Text className="text-center text-5xl justify-end text-violet-700">Login</Text>
      </View>
      <Formik
        initialValues={{ email: 'admin@admin.qq', password: '123456' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Email must be valid email')
            .min(3)
            .required('Email is required field'),
          password: Yup.string()
            .min(6, 'Password must be 6 characters long')
            .max(30)
            .required('Password is required field'),
        })}
        onSubmit={(values) => {
          axiosLogin(values);
        }}
      >
        {(formikProps) => (
          <>
            <CustomInput text="Email" protect={false} formik={formikProps} fieldName="email" />
            <CustomInput text="Password" protect={true} formik={formikProps} fieldName="password" />
            <CustomButton onPress={formikProps.handleSubmit} title="Submit" />
          </>
        )}
      </Formik>
    </View>
  );
}
