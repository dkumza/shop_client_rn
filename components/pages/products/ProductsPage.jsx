import { FlatList, StyleSheet, View } from 'react-native';
import Head from '../../topBar/Head';
import SingleProduct from './SingleProduct';
import { useProductContext } from '../../../context/ProductContext';

const ProductsPage = () => {
  const { products } = useProductContext();
  return (
    <View className="flex-1 ">
      <Head />
      <View className="flex-shrink">
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SingleProduct prod={item} />}
          contentContainerStyle={styles.prodWrapper}
          // numColumns={'2'}
        />
      </View>
    </View>
  );
};
export default ProductsPage;

const styles = StyleSheet.create({
  prodWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    flexGrow: 0,
    flexWrap: 'wrap',
    // width: '100%',
  },
});
