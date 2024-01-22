import { Text, View } from 'react-native';
import CustomInput from '../custom/CustomInput';
import CustomButton from '../custom/CustomButton';
import { useAuthContext } from '../../context/AuthContext';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const { login } = useAuthContext();

  return (
    <View className="flex-1 justify-end">
      <View className=" mb-8">
        <Text className="text-center text-5xl justify-end text-violet-700">Login</Text>
      </View>
      <Formik
        initialValues={{ email: '', password: '' }}
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
          console.log('values ===', values);
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
