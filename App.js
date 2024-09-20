import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from './components/Header';
import Story from './components/Story';
import UnifiedList from './components/UnifiedList';
import SearchScreen from './components/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Buat instance Drawer Navigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Drawer Navigator untuk mengatur navigasi */}
      <Drawer.Navigator initialRouteName="Home">
        {/* Screen Beranda */}
        <Drawer.Screen 
          name="Home" 
          options={{
            headerShown: false, // Menggunakan custom header
            title: 'Home',
          }}
        >
          {() => (
            <SafeAreaView className="flex-1">
              <Header />
              <Story />
              <UnifiedList />
            </SafeAreaView>
          )}
        </Drawer.Screen>

        {/* Screen Pencarian */}
        <Drawer.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{
            title: 'Search',
            headerShown: false, // Menggunakan custom header
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
