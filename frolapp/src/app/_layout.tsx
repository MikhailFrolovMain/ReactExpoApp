import { BebasNeue_400Regular, useFonts } from '@expo-google-fonts/bebas-neue';
import { Slot, useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const anim = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    const toVal = isOpen ? 0 : 1;  
    Animated.spring(anim, {
      toValue: toVal,
      friction: 5, 
      useNativeDriver: true, 
    }).start();
    
    setIsOpen(!isOpen); 
  };
  
  const fly1 = { opacity: anim, transform: [{ translateX: anim.interpolate({ inputRange: [0, 1], outputRange: [0, -5] }) },{ translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [0, -120] }) }] };
  const fly2 = { opacity: anim, transform: [{ translateX: anim.interpolate({ inputRange: [0, 1], outputRange: [0, -65] }) },{ translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [0, -65] }) }] };
  const fly3 = { opacity: anim, transform: [{ translateX: anim.interpolate({ inputRange: [0, 1], outputRange: [0, -100] }) }] };

  const go = (path: any) => {
    router.push(path);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.content}>
        <Slot />
      </View>

      <View style={styles.navBar}>
        
        <Animated.View style={[styles.miniWrap, fly1]}>
          <TouchableOpacity style={styles.navBtn} onPress={() => go('/')}>
            <Text style={styles.navTxt}>Dom</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.miniWrap, fly2]}>
          <TouchableOpacity style={styles.navBtn} onPress={() => go('/explore')}>
            <Text style={styles.navTxt}>Podrobno</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.miniWrap, fly3]}>
          <TouchableOpacity style={styles.navBtn} onPress={() => go('/about')}>
            <Text style={styles.navTxt}>O meni</Text>
          </TouchableOpacity>
        </Animated.View>
        
        <TouchableOpacity style={styles.navBtn1} onPress={toggleMenu} activeOpacity={0.8}>
            <Text style={styles.navTxt}>{isOpen ? 'X' : '...'}</Text>
        </TouchableOpacity>
        
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  navBar: {
    position: 'absolute',
    bottom: 30, 
    right: 20,
    width: 60,  
    height: 60,
    backgroundColor: '#fdfdfd45',
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 30,
    zIndex: 10,
  },
 
  miniWrap: {
    position: 'absolute',
    width: 100,
    height: 44,
    backgroundColor: '#454545c8', 
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBtn: {
    flex: 1,
    width: 80,  
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBtn1: {
    position: 'absolute',
    width: 60,
    height: 60,
    justifyContent: 'center', 
    alignItems: 'center',     
    borderRadius: 30,
    backgroundColor: '#fdfdfd38', 
  },
  navTxt: { color: 'white', fontSize: 18, fontFamily: 'BebasNeue_400Regular', }
});