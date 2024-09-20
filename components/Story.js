import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';

const stories = [
  { id: '1', name: 'My Story', image: require('../assets/user.png') },
  { id: '2', name: 'Avi', image: require('../assets/user.png') },
];

const Story = () => {
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
              borderStyle: 'dashed',
            }}
          />
        </View>
      )}

      <Image source={item.image} className="w-16 h-16 rounded-full border-2 border-gray-300" />
      {item.name === 'My Story' && (
        <View className="absolute bottom-5 right-0">
          <Image source={require('../assets/plus.png')} className="w-6 h-6" />
        </View>
      )}

      <Text className="mt-1 text-xs text-white">{item.name}</Text>
    </View>
  );

  return (
    <View className="bg-default-blue">
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
