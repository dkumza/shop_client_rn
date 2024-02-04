import { View, Text, Image, TextInput } from 'react-native';
import Head from '../../topBar/Head';
import CustomButton from '../../custom/CustomButton';

const urlPrefix = 'http://10.0.2.2:3000';

export default function SingleProductPage({ route }) {
  const { product } = route.params;
  console.log(product);

  return (
    <View className="pt-8">
      <Head />
      <View className="px-4">
        <View className="pb-2">
          <Text className="">{product.title}</Text>
        </View>
        <View>
          <Image
            className="h-[240px] w-[100%]"
            source={{ uri: `${urlPrefix}/${product.img_url}` }}
          />
        </View>
        <View class="">
          <Text className="text-3xl pt-4 ">{product.price} €</Text>
        </View>
        {product.stock !== 0 && (
          <View className="flex-row justify-between items-center">
            <View>
              <Text>Choose quantity</Text>
            </View>
            <TextInput
              keyboardType="numeric"
              maxLength={1}
              selectionColor="#4c1d95"
              className="border border-gray-400 py-2 px-4 w-1/3 rounded"
            ></TextInput>
          </View>
        )}
        <View>
          <CustomButton title="Add to Cart" />
        </View>
        <View className="">
          <Text className="font-semibold text-violet-600 pb-2">Product description</Text>
          <Text className="px-2">{product.description}</Text>
        </View>
      </View>
    </View>
  );
}
