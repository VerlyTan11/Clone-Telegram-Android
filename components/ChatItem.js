import React from 'react';
import { View, Text, Image } from 'react-native';
import { styled } from 'nativewind';

const ChatItem = ({ name, teks, photo_url, time }) => {
  return (
    <View className="flex-row items-center p-2 mx-2">
      <Image source={{ uri: photo_url }} className="w-14 h-14 rounded-full mb-2" />
      
      <View className="flex-1 mr-2 flex-row items-center justify-between ml-4 pb-4 border-b border-light-grey">
        <View>
          <Text className="text-lg font-bold text-black">{name}</Text>
          <Text className="text-sm text-gray-500 w-60" numberOfLines={1} ellipsizeMode="tail">
            {teks}
          </Text>
        </View>
        <Text className="text-sm text-gray-500">{time}</Text>
      </View>
    </View>
  );
};

export default styled(ChatItem);
