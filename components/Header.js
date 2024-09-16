import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const Header = () => {
  return (
    <View className="flex-row items-center justify-between px-4 pt-8 bg-default-blue">
      <TouchableOpacity>
        <Image source={require('../assets/menu.png')} className="w-6 h-6" />
      </TouchableOpacity>

      <Text className="text-white text-xl mr-44 font-bold flex-1 text-center">Telegram</Text>

      <TouchableOpacity>
        <Image source={require('../assets/search.png')} className="w-5 h-5" />
      </TouchableOpacity>
    </View>
  );
};

export default styled(Header);
