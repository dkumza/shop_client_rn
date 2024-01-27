import { FlatList, StyleSheet, View } from 'react-native';
import Head from '../../topBar/Head';
import SingleProduct from './SingleProduct';
import { useProductContext } from '../../../context/ProductContext';

const ProductsPage = () => {
  const { products } = useProductContext();
  return (
    <View className="flex-1">
      <Head />
      <View className="flex-1">
        <FlatList
          className="px-4 border-2 border-red-500 flex-1"
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SingleProduct prod={item} />}
          contentContainerStyle={styles.prodWrapper}
        />
      </View>
      {/* <SingleProduct /> */}
    </View>
  );
};
export default ProductsPage;

const styles = StyleSheet.create({
  prodWrapper: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    height: '100%',
    // flexGrow: 1,
  },
});
