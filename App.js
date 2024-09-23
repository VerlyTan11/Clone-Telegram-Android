import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from './components/Header';
import Story from './components/Story';
import UnifiedList from './components/UnifiedList';
import SearchScreen from './components/SearchScreen';
import SplashScreen from './components/SplashScreen'; 
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Komponen HomeScreen dengan Header, Story, dan UnifiedList
function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <Header />
      <Story />
      <UnifiedList />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* SplashScreen */}
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{
            headerShown: false, // Menyembunyikan header di SplashScreen
          }} 
        />

        {/* Drawer Navigator berisi Home dan Search */}
        <Stack.Screen 
          name="HomeDrawer" 
          options={{
            headerShown: false, // Menyembunyikan header
          }}
        >
          {() => (
            <Drawer.Navigator initialRouteName="Home">
              {/* Screen Beranda (Home) */}
              <Drawer.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                  title: 'Home',
                  headerShown: false, // Menyembunyikan header default karena menggunakan custom Header
                }}
              />

              {/* Screen Pencarian */}
              <Drawer.Screen 
                name="Search" 
                component={SearchScreen} 
                options={{
                  title: 'Search',
                  headerShown: false, // Menyembunyikan header default karena menggunakan custom Header
                }}
              />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
