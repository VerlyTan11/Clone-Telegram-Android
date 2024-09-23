// components/SplashScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const scaleAnim = useRef(new Animated.Value(1)).current; // Animasi ukuran gambar
  const bgColorAnim = useRef(new Animated.Value(0)).current; // Animasi warna background

  // Fungsi untuk menjalankan animasi
  useEffect(() => {
    // Animasi ukuran gambar
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2, // Membesarkan gambar
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // Mengecilkan gambar kembali
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Animasi perubahan warna background dari putih ke biru
    Animated.timing(bgColorAnim, {
      toValue: 1,
      duration: 3000, // Durasi perubahan warna
      useNativeDriver: false,
    }).start();

    // Navigasi setelah animasi selesai (3 detik)
    const timer = setTimeout(() => {
      navigation.replace('HomeDrawer');
    }, 3000); // 3 detik
    return () => clearTimeout(timer);
  }, [navigation, scaleAnim, bgColorAnim]);

  // Interpolasi warna background dari putih ke biru
  const backgroundColor = bgColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ffffff', '#517DA2'], 
  });

  return (
    <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor }}>
      <Animated.Image
        source={require('../assets/telegram.png')}
        style={{
          width: 128, 
          height: 128,
          transform: [{ scale: scaleAnim }],
        }}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

export default SplashScreen;
