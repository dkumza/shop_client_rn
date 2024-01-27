import { FlatList, View } from 'react-native';
import Head from '../../topBar/Head';
import SingleProduct from './SingleProduct';
import { useProductContext } from '../../../context/ProductContext';

const ProductsPage = () => {
  const { products } = useProductContext();
  return (
    <View>
      <Head />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SingleProduct prod={item} />}
      />
      {/* <SingleProduct /> */}
    </View>
  );
};
export default ProductsPage;
