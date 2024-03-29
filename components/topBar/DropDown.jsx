import { useState } from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useAuthContext } from '../../context/AuthContext';

export default function DropDown() {
  const { logout } = useAuthContext();
  const [showDropMenu, setShowDropMenu] = useState(false);

  const handleShowMenu = () => {
    setShowDropMenu(() => !showDropMenu);
  };

  return (
    <View className="w-4/6 items-end z-10">
      <TouchableOpacity
        onPress={handleShowMenu}
        className="border rounded-lg border-violet-700 h-10 w-10 justify-center items-center mr-4"
      >
        <Text className=" text-violet-500 text-lg">M</Text>
      </TouchableOpacity>
      {showDropMenu && (
        <View className=" w-full items-end bg-violet-700 absolute">
          <View className="py-3 px-4 flex flex-row justify-between w-full items-center">
            <View className>
              <TouchableOpacity onPress={handleShowMenu}>
                <AntDesign name="close" size={18} color="white" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={logout} className="">
                <Text className="text-white">Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View className="pt-2 pb-3 px-4 flex flex-row justify-end w-full items-center">
            <Text className="text-white">Cart</Text>
          </View> */}
        </View>
      )}
    </View>
  );
}
