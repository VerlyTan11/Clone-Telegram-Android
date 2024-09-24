import React from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View className="p-4 bg-default-blue">
        <View className="flex-col">
          <View className="bg-profile-blue w-12 h-12 rounded-full justify-center items-center">
            <Text className="text-2xl font-bold text-white">BT</Text>
          </View>
          <View className="mt-4">
            <Text className="text-base font-semibold text-white">Beverly Tan</Text>
            <Text className="text-sm text-white">+62 812 92452592</Text>
          </View>
        </View>
      </View>

      <View className="flex-1">
        <View className="flex-1 mt-1">
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
