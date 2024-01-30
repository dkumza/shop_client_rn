import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const urlPrefix = 'http://10.0.2.2:3000';

export default function SingleProduct({ prod }) {
  // console.log(prod.id);
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('SingleProductPage', { product: prod })}>
      <View className="border border-gray-300 min-h-fit bg-zinc-200">
        <View className="">
          <Image className="h-[170px] w-[172px]" source={{ uri: `${urlPrefix}/${prod.img_url}` }} />
        </View>
        <View className="gap-1 px-4 py-2 pb-2 h-18">
          <Text className="font-semibold text-xl ">{prod.price} €</Text>
          <Text className="">{prod.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
