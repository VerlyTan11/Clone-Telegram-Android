import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import contactsData from './../kontak.json';
import chatsData from './../data.json';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const navigation = useNavigation();

  const handleSearch = (text) => {
    setQuery(text);

    const filteredChats = chatsData.filter(chat => chat.name.toLowerCase().includes(text.toLowerCase()));
    const filteredContacts = contactsData.contacts.filter(contact => contact.name.toLowerCase().includes(text.toLowerCase()));

    setFilteredData([...filteredChats, ...filteredContacts]);
  };

  const renderItem = ({ item }) => (
    <View className="flex-row items-center p-2 mx-2">
      <Image source={{ uri: item.photo_url || item.image }} className="w-14 h-14 rounded-full mr-3" />
      <Text className="font-bold text-lg">{item.name}</Text>
    </View>
  );

  return (
    <View className="flex-1 p-4 mt-5">
      <View className="flex-row items-center w-full mb-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-2">
          <Image source={require('../assets/back.png')} className="w-5 h-5" />
        </TouchableOpacity>

        <TextInput
          value={query}
          onChangeText={handleSearch}
          placeholder="Cari"
          className="flex-1 h-12 px-4 text-lg"
        />
      </View>

      {query === '' ? (
        <View className="flex-1 items-center justify-center">
          <Image source={require('../assets/phone-unscreen.gif')} className="w-64 h-64" />
          <Text className="text-gray-500 text-lg font-bold">Tidak ada hasil</Text>
        </View>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={renderItem}
          ListEmptyComponent={<Text className="text-gray-500 mt-4">No Results Found</Text>}
        />
      )}
    </View>
  );
};

export default SearchScreen;
