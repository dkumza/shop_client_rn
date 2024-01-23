import { TextInput, View } from 'react-native';

export default function Search() {
  return (
    <View className="px-4">
      <TextInput
        className="py-2 px-4 border my-4 rounded border-violet-700 "
        placeholder="Search for product"
        selectionColor="#4c1d95"
      ></TextInput>
    </View>
  );
}
