import { View, Text, FlatList } from 'react-native';

export default function SingleProduct({ prod }) {
  return (
    <View className="px-4">
      <Text>{prod.description}</Text>
    </View>
  );
}
