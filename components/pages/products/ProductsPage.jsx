import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import Head from '../../topBar/Head';
import SingleProduct from './SingleProduct';
import { useProductContext } from '../../../context/ProductContext';

const ProductsPage = () => {
  const { products } = useProductContext();
  return (
    <View className="flex-1 ">
      <Head />
      <ScrollView>
        <View style={styles.prodWrapper}>
          {products.map((prod) => (
            <SingleProduct key={prod.id} prod={prod} />
          ))}
        </View>
      </ScrollView>
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
  },
});
