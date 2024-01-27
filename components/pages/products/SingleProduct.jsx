import { View, Text, FlatList, Image, ScrollView, StyleSheet } from 'react-native';

const urlPrefix = 'http://10.0.2.2:3000';

export default function SingleProduct({ prod }) {
  return (
    <View className=" w-full justify-center align-middle bg-violet-500 rounded">
      <View className="flex-1">
        <Image
          className="h-[170px] w-[172px] rounded"
          source={{ uri: `${urlPrefix}/${prod.img_url}` }}
        ></Image>
      </View>
      <View className="flex-1 gap-1 px-4 py-2 pb-2">
        <Text className="font-semibold text-xl text-white">{prod.price} €</Text>
        <Text className=" text-lg text-white">{prod.title}</Text>
      </View>
    </View>
  );
}
