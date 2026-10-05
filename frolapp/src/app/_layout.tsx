import { Slot, useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RootLayout() {
  const router = useRouter();
  const anim = useRef(new Animated.Value(0)).current;
  // pruzina
  const toggleMenu = () => {
    const toVal = isOpen ? 0 : 1; 
    
    Animated.spring(anim, {
      toValue: toVal,
      friction: 5, 
      useNativeDriver: true, 
    }).start();
    
    setIsOpen(!isOpen); //reset
  };
  
  const fly1 = { transform: [{ translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [0, -180] }) }] };
  const fly2 = { transform: [{ translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [0, -120] }) }] };
  const fly3 = { transform: [{ translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [0, -60] }) }] };

  const [isOpen, setIsOpen] = useState(false);
  const go = (path: any) => {
    router.push(path);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.content}>
        <Slot />
      </View>

      <View style={styles.navBar}>
        <Animated.View style={fly1}>
          <TouchableOpacity style={styles.navBtn} onPress={() => go('/')}>
            <Text style={styles.navTxt}>1</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={fly2}>
          <TouchableOpacity style={styles.navBtn} onPress={() => go('/explore')}>
            <Text style={styles.navTxt}>2</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={fly3}>
          <TouchableOpacity style={styles.navBtn} onPress={() => go('/about')}>
            <Text style={styles.navTxt}>3</Text>
          </TouchableOpacity>
        </Animated.View>
        <TouchableOpacity style={styles.navBtn1} onPress={toggleMenu}>
            <Text style={styles.navTxt}>{isOpen ? 'X' : 'O'}</Text>
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
    bottom: 15,
    left: 15,
    width: 50,
    height: 50,
    backgroundColor: '#446d16a2',
    justifyContent: 'center',
    borderRadius: 30,
    alignItems: 'center'
  },
  navBtn: {
    padding: 0,
    position: 'absolute',
  },
  navBtn1: {
    padding:5,
    bottom: -10,
    left: 15,
    width: 50,
    height: 50,
    position: 'absolute',
  },
  navTxt: { color: 'black', fontWeight: 'bold' }
});