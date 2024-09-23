import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native';
import contactsData from './../kontak.json';
import chatsData from './../data.json';
import doubleCheckImage from './../assets/double-check.png';

const ChatItem = ({ name, teks, photo_url, time, seen, chat, isLast }) => {
  return (
    <Pressable
      className="flex-row items-center p-2 mx-2"
      onHoverIn={() => console.log('Hovered in!')}
      onHoverOut={() => console.log('Hovered out!')}
      android_ripple={{ color: '#ddd' }}
      style={({ Hovered }) => [
        { backgroundColor: Hovered ? '#e5e5e5' : 'transparent' }
      ]}
    >
      <Image source={{ uri: photo_url }} className="w-14 h-14 rounded-full mb-2" />
      <View className={`flex-1 mr-2 ml-4 pb-4 border-b-2 ${isLast ? 'border-b-0' : 'border-b-light-grey'}`}>
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold text-black">{name}</Text>
          <View className="flex-row items-center">
            {seen === 'yes' && (
              <Image source={doubleCheckImage} style={{ width: 16, height: 16, marginRight: 4 }} />
            )}
            <Text className="text-sm text-gray-500">{time}</Text>
          </View>
        </View>
        <View className="flex-row items-center mt-2">
          <Text className="text-sm text-gray-500 flex-1" numberOfLines={1} ellipsizeMode="tail">
            {teks}
          </Text>
          {chat > 0 && (
            <View style={{ backgroundColor: '#4fd05c', borderRadius: 12, paddingHorizontal: 8, paddingVertical: 4, marginLeft: 8 }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>{chat}</Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

const ContactItem = ({ name, image, last_seen }) => {
  return (
    <Pressable
      className="flex-row items-center p-2 mx-2"
      onHoverIn={() => console.log('Hovered in!')}
      onHoverOut={() => console.log('Hovered out!')}
      android_ripple={{ color: '#ddd' }}
      style={({ Hovered }) => [
        { backgroundColor: Hovered ? '#e5e5e5' : 'transparent' }
      ]}
    >
      <Image source={{ uri: image }} className="w-14 h-14 rounded-full mr-3" />
      <View className="flex-col">
        <Text className="font-bold text-lg">{name}</Text>
        <Text className="text-gray-500 text-sm">terlihat pada {last_seen}</Text>
      </View>
    </Pressable>
  );
};

const UnifiedList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const combinedData = [
      ...chatsData.map((chat, index) => ({ ...chat, type: 'chat', isLast: index === chatsData.length - 1 })),
      { type: 'header' },
      ...contactsData.contacts.map(contact => ({ ...contact, type: 'contact' })),
    ];
    setData(combinedData);
  }, []);

  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'chat':
        return (
          <ChatItem
            name={item.name}
            teks={item.teks}
            photo_url={item.photo_url}
            time={item.time}
            seen={item.seen}
            chat={item.chat}
            isLast={item.isLast}
          />
        );
      case 'contact':
        return <ContactItem name={item.name} image={item.image} last_seen={item.last_seen} />;
      case 'header':
        return (
          <View>
            <View style={{ paddingVertical: 10, backgroundColor: '#f0f0f0', width: '100%' }} />
            <Text className="text-base text-text-blue font-bold ml-4 my-2">Kontak Anda di Telegram</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => `${item.type}-${index}`}
      renderItem={renderItem}
    />
  );
};

export default UnifiedList;
