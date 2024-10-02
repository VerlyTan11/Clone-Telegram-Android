import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header';
import Story from './components/Story';
import UnifiedList from './components/UnifiedList';
import SearchScreen from './components/SearchScreen';
import SplashScreen from './components/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawer from './components/CustomDrawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeScreen = ({ isDarkMode, toggleTheme }) => {
  return (
    <SafeAreaView className={`${isDarkMode ? 'bg-light-dark text-white' : 'bg-white'} flex-1`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Story />
      <UnifiedList isDarkMode={isDarkMode} />
    </SafeAreaView>
  );
};


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load the theme mode from AsyncStorage
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark');
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    await AsyncStorage.setItem('theme', newTheme);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false, // Menyembunyikan header di SplashScreen
          }}
        />

        <Stack.Screen
          name="HomeDrawer"
          options={{
            headerShown: false, // Menyembunyikan header
          }}
        >
          {() => (
            <Drawer.Navigator
              initialRouteName="Home"
              drawerContent={(props) => <CustomDrawer {...props} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
            >
              <Drawer.Screen
                name="Home"
                options={{
                  title: 'Home',
                  headerShown: false, // Menyembunyikan header default
                }}
              >
                {(props) => <HomeScreen {...props} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
              </Drawer.Screen>

              <Drawer.Screen
                name="Search"
                component={SearchScreen}
                options={{
                  title: 'Search',
                  headerShown: false, // Menyembunyikan header default
                }}
              />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
