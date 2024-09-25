// components/SplashScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const moveAnim = useRef(new Animated.ValueXY({ x: -100, y: 150 })).current; // Animasi posisi gambar
  const scaleAnim = useRef(new Animated.Value(0)).current; // Animasi ukuran gambar

  // Fungsi untuk menjalankan animasi
  useEffect(() => {
    // Animasi perpindahan gambar dari kiri bawah ke tengah
    Animated.parallel([
      Animated.timing(moveAnim, {
        toValue: { x: -10, y: 10 }, // Bergerak ke tengah layar
        duration: 2000,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1, // Muncul dan membesar
        duration: 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();

    // Navigasi setelah animasi selesai (3 detik)
    const timer = setTimeout(() => {
      navigation.replace('HomeDrawer');
    }, 3000); // 3 detik
    return () => clearTimeout(timer);
  }, [navigation, moveAnim, scaleAnim]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
          width: 200, 
          height: 200, 
          borderRadius: 100, 
          backgroundColor: '#26a5e4', // Lingkaran biru di tengah layar
          position: 'absolute',
        }} />
        <Animated.Image
          source={require('../assets/telegram.png')}
          style={{
            width: 128,
            height: 128,
            transform: [
              { translateX: moveAnim.x },
              { translateY: moveAnim.y },
              { scale: scaleAnim }
            ],
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default SplashScreen;
