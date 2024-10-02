import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const stories = [
  { id: '1', name: 'My Story' },
  { id: '2', name: 'Avi', image: require('../assets/user.png') },
];

const Story = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from AsyncStorage when the app starts
  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      if (storedTheme) {
        setIsDarkMode(storedTheme === 'dark');
      }
    };
    loadTheme();
  }, []);

  const renderItem = ({ item }) => (
    <View className="items-center mr-4 my-6 relative">
      {item.name !== 'My Story' && (
        <View className="absolute">
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 40,
              borderWidth: 2,
              borderColor: 'rgba(192,192,192,0.7)',
              position: 'absolute',
              top: -3,
              left: -35,
              zIndex: -1,
            }}
          />
        </View>
      )}

      {/* Cek apakah ini 'My Story' atau bukan */}
      {item.name === 'My Story' ? (
        <View className="bg-profile-blue w-16 h-16 rounded-full justify-center items-center">
          <Text className="text-2xl font-bold text-white">BT</Text>
        </View>
      ) : (
        <Image source={item.image} className="w-16 h-16 rounded-full border-2 border-gray-300" />
      )}

      {/* Icon Plus untuk 'My Story' */}
      {item.name === 'My Story' && (
        <View className="absolute bottom-5 right-0">
          <Image source={require('../assets/plus.png')} className="w-6 h-6" />
        </View>
      )}

      <Text className={`mt-1 text-xs ${isDarkMode ? 'text-white' : 'text-gray-300'}`}>{item.name}</Text>
    </View>
  );

  return (
    <View className={`${isDarkMode ? 'bg-light-dark' : 'bg-default-blue'}`}>
      <FlatList
        horizontal
        data={stories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 2 }}
      />
    </View>
  );
};

export default Story;
