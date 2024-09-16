import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import ChatItem from './ChatItem';
import data from '../data.json';

const ChatList = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    setChats(data);
  }, []);

  return (
    <FlatList
      data={chats}
      keyExtractor={(item) => item.email}
      renderItem={({ item }) => (
        <ChatItem 
          name={item.name} 
          teks={item.teks} 
          photo_url={item.photo_url} 
          time={item.time} 
        />
      )}
      ItemSeparatorComponent={() => <View />}
    />
  );
};

export default ChatList;
