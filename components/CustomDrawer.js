import React, { useState } from 'react';
import { View, Text, Image, Pressable, Animated } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [arrowRotation] = useState(new Animated.Value(0));

  const toggleExpand = () => {
    Animated.timing(arrowRotation, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsExpanded(!isExpanded);
  };

  const rotateArrow = arrowRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
      <View className="p-4 bg-default-blue">
        <View className="flex-col">
          <View className="flex-row justify-between items-center">
            <View className="bg-profile-blue w-12 h-12 rounded-full justify-center items-center">
              <Text className="text-2xl font-bold text-white">BT</Text>
            </View>
            <Image source={require('../assets/moon.png')} className="w-5 h-5" />
          </View>
          <View className="mt-6 flex-row justify-between items-center">
            <View>
              <Text className="text-sm font-semibold text-white">Beverly Tan</Text>
              <Text className="text-xs text-white">+62 812 92452592</Text>
            </View>
            <Pressable onPress={toggleExpand}>
              <Animated.Image
                source={require('../assets/down-arrow.png')}
                className="w-5 h-5"
                style={{ transform: [{ rotate: rotateArrow }] }}
              />
            </Pressable>
          </View>
        </View>
      </View>

      <View className="flex-1">
        <View className="flex-1 mt-1">
          {isExpanded && (
            <View className="mt-4 p-2 bg-white rounded-lg">
              <View className="flex-row items-center mb-7 pl-0.5">
                <View className="bg-profile-blue w-8 h-8 rounded-full justify-center items-center">
                  <Text className="text-xs font-bold text-white">BT</Text>
                  <View className="absolute bottom-0 right-0">
                    <Image source={require('../assets/check.png')} className="w-3 h-3" />
                  </View>
                </View>
                <View>
                  <Text className="text-sm font-semibold text-gray-700 pl-7">Beverly Tan</Text>
                </View>
              </View>

              <Pressable
                onPress={() => {}}
                className="flex-row items-center pl-2 mb-5"
                style={({ pressed }) => [
                  { backgroundColor: pressed ? '#e5e7eb' : 'transparent' },
                ]}
              >
                <Image source={require('../assets/plus-1.png')} className="w-5 h-5" />
                <Text className="text-sm text-darken pl-8">Tambah Akun</Text>
              </Pressable>

              <View style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.1)', marginVertical: 5 }} />
            </View>
          )}

          <DrawerItem
            label="Profil Saya"
            icon={() => <Image source={require('../assets/profile.png')} className="w-5 h-5" />}
            onPress={() => props.navigation.navigate('Home')}
          />

          <View style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.1)', marginVertical: 5 }} />

          <DrawerItem
            label="Grup Baru"
            icon={() => <Image source={require('../assets/group.png')} className="w-5 h-5" />}
            onPress={() => {}}
          />
          <DrawerItem
            label="Kontak"
            icon={() => <Image source={require('../assets/person.png')} className="w-5 h-5" />}
            onPress={() => {}}
          />
          <DrawerItem
            label="Panggilan"
            icon={() => <Image source={require('../assets/telephone.png')} className="w-5 h-5" />}
            onPress={() => {}}
          />
          <DrawerItem
            label="Pesan Tersimpan"
            icon={() => <Image source={require('../assets/bookmark.png')} className="w-5 h-5" />}
            onPress={() => {}}
          />
          <DrawerItem
            label="Pengaturan"
            icon={() => <Image source={require('../assets/setting.png')} className="w-5 h-5" />}
            onPress={() => {}}
          />

          <View style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.1)', marginVertical: 5 }} />

          <DrawerItem
            label="Undang Teman"
            icon={() => <Image source={require('../assets/invite.png')} className="w-5 h-5" />}
            onPress={() => {}}
          />

          <DrawerItem
            label="Fitur Telegram"
            icon={() => <Image source={require('../assets/information.png')} className="w-5 h-5" />}
            onPress={() => {}}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
