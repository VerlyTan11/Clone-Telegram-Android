import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import contactsData from './../kontak.json';
import chatsData from './../data.json';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigation = useNavigation();

  // Function to toggle between light and dark modes
  const toggleTheme = async () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    await AsyncStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

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

  const handleSearch = (text) => {
    setQuery(text);

    const filteredChats = chatsData.filter((chat) =>
      chat.name.toLowerCase().includes(text.toLowerCase())
    );
    const filteredContacts = contactsData.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredData([...filteredChats, ...filteredContacts]);
  };

  const renderItem = ({ item }) => (
    <View className={`flex-row items-center p-2 mx-2 ${isDarkMode ? 'bg-light-dark' : 'bg-white'}`}>
      <Image source={{ uri: item.photo_url || item.image }} className="w-14 h-14 rounded-full mr-3" />
      <Text className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
        {item.name}
      </Text>
    </View>
  );

  return (
    <View className={`flex-1 p-4 mt-5 ${isDarkMode ? 'bg-light-dark text-white' : 'bg-white'}`}>
      <View className="flex-row items-center w-full mb-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-2">
          <Image source={require('../assets/back.png')} className="w-5 h-5" />
        </TouchableOpacity>

        <TextInput
          value={query}
          onChangeText={handleSearch}
          placeholder="Cari"
          placeholderTextColor={isDarkMode ? 'white' : 'gray'}
          className={`flex-1 h-12 px-4 text-lg ${isDarkMode ? 'bg-light-dark text-white' : 'bg-gray-100 text-black'}`}
        />
      </View>

      {query === '' ? (
        <View className="flex-1 items-center justify-center">
          <Image source={require('../assets/phone-unscreen.gif')} className="w-64 h-64" />
          <Text className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-500'}`}>
            Tidak ada hasil
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={renderItem}
          ListEmptyComponent={<Text className={`mt-4 ${isDarkMode ? 'text-white' : 'text-gray-500'}`}>No Results Found</Text>}
        />
      )}

      {/* Toggle theme button */}
      <TouchableOpacity onPress={toggleTheme} className="absolute bottom-4 right-4">
        <Image
          source={isDarkMode ? require('../assets/sun.png') : require('../assets/moon.png')}
          className="w-6 h-6"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;