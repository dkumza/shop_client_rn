import { View, Text, Image, TextInput } from 'react-native';
import Head from '../../topBar/Head';
import CustomButton from '../../custom/CustomButton';

const urlPrefix = 'http://10.0.2.2:3000';

export default function SingleProductPage({ route }) {
  const { product } = route.params;
  console.log(product);

  const differenceInMilliseconds = new Date() - new Date(product.updated);
  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

  let updatedTime;
  if (differenceInDays < 1) {
    updatedTime = `1 hours ago`;
  } else {
    updatedTime = `${differenceInDays.toFixed(2)} days ago`;
  }

  return (
    <View className="pt-8">
      <Head />
      <View className="px-4">
        <View className="">
          <Text className="text-xl pb-2">{product.title}</Text>
        </View>
        <View>
          {product.img_url ? (
            <Image
              className="h-[240px] w-[100%]"
              source={{ uri: `${urlPrefix}/${product.img_url}` }}
            />
          ) : (
            <View className="h-[240px] w-[100%] bg-zinc-200">
              <Text className="text-center pt-12 text-2xl text-zinc-400">No Image</Text>
            </View>
          )}
          <View className="absolute bg-violet-300 py-1 px-2 right-0">
            <Text>{updatedTime}</Text>
          </View>
        </View>
        <View className="">
          <View className="">
            <Text className="text-3xl pt-4">{product.price} €</Text>
          </View>
        </View>
        <View>
          <CustomButton title="Contact Seller" />
        </View>
        <View className="">
          <Text className="font-semibold text-violet-600 pb-2">Product description</Text>
          <Text className="px-2">{product.description}</Text>
        </View>
      </View>
    </View>
  );
}
