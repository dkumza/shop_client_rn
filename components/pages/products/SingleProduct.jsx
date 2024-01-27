import { View, Text, FlatList, Image, ScrollView, StyleSheet } from 'react-native';

const urlPrefix = 'http://10.0.2.2:3000';

export default function SingleProduct({ prod }) {
  return (
    <ScrollView className="border-2 border-green-500 flex-grow ">
      <View className="flex-1 w-full">
        <View className="flex-1">
          <Image className="h-36 w-36" source={{ uri: `${urlPrefix}/${prod.img_url}` }}></Image>
        </View>
        <View className="flex-1">
          <Text>{prod.price}</Text>
          <Text>{prod.title}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
// const styles = StyleSheet.create({
//   childP: {
//     flex: 1,
//     width: '100%',
//   },
// });
