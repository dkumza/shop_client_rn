import { View } from 'react-native';
import Search from '../topBar/Search';
import Menu from './Menu';

const Head = () => {
  return (
    <View className="">
      <Menu />
      <Search />
    </View>
  );
};
export default Head;
