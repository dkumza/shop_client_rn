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

// <TextInput
//   onChangeText={formik.handleChange('email')}
//   onBlur={formik.handleBlur('email')}
//   value={formik.values.email}
//   placeholder="Email"
// />;
// {
//   formik.touched.email && formik.errors.email ? <Text>{formik.errors.email}</Text> : null;
// }

const CustomInput = ({ text, protect, formik, fieldName }) => {
  return (
    <View className="justify-end gap-1 mb-2">
      {formik.touched[fieldName] && formik.errors[fieldName] ? (
        <Text className="px-1 text-rose-500">{formik.errors[fieldName]}</Text>
      ) : (
        <Text className="px-1  text-violet-800">{text}</Text>
      )}

      <TextInput
        onChangeText={formik.handleChange(fieldName)}
        onBlur={formik.handleBlur(fieldName)}
        value={formik.values[fieldName]}
        className={`border border-violet-400 bg-violet-50 rounded-lg py-2 px-4`}
        keyboardType="default"
        secureTextEntry={protect}
        selectionColor="#4c1d95"
      />
    </View>
  );
};
export default CustomInput;
