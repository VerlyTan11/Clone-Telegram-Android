import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from './components/Header';
import Story from './components/Story';
import UnifiedList from './components/UnifiedList';
import SearchScreen from './components/SearchScreen';
import SplashScreen from './components/SplashScreen'; // Import SplashScreen
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

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

        {/* HomeDrawer berisi Drawer Navigator */}
        <Stack.Screen 
          name="HomeDrawer" 
          options={{
            headerShown: false, // Menyembunyikan header
          }}
        >
          {() => (
            <Drawer.Navigator initialRouteName="HomeScreen">
              {/* Screen Beranda */}
              <Drawer.Screen 
                name="HomeScreen" // Nama unik untuk Home dalam Drawer Navigator
                options={{
                  title: 'Home',
                  headerShown: false,
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
                  headerShown: false,
                }}
              />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
