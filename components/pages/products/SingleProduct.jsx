import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const urlPrefix = 'http://10.0.2.2:3000';

export default function SingleProduct({ prod }) {
  // console.log(prod.id);
  const navigation = useNavigation();
  console.log(prod.img_url);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('SingleProductPage', { product: prod })}>
      <View className="border border-gray-300 min-h-fit bg-zinc-200">
        <View className="">
          {prod.img_url ? (
            <Image
              className="h-[170px] w-[172px]"
              source={{ uri: `${urlPrefix}/${prod.img_url}` }}
            />
          ) : (
            <Text className="h-[170px] w-[172px] text-center pt-4 bg-white text-gray-400">
              No Image
            </Text>
          )}
        </View>
        <View className="gap-1 px-4 py-2 pb-2 h-18">
          <Text className="font-semibold text-xl ">{prod.price} €</Text>
          <Text className="">{prod.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
