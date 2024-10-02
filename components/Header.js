import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';

const Header = ({ isDarkMode }) => {
  const navigation = useNavigation();

  return (
    <View className={`flex-row items-center justify-between px-4 pt-8 ${isDarkMode ? 'bg-darken' : 'bg-default-blue'}`}>
      {/* Menambahkan fungsi untuk membuka drawer */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={require('../assets/menu.png')} className="w-5 h-5" />
      </TouchableOpacity>

      <Text className="text-white text-xl mr-44 font-bold flex-1 text-center">Telegram</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Image source={require('../assets/search.png')} className="w-5 h-5" />
      </TouchableOpacity>
    </View>
  );
};

export default styled(Header);
