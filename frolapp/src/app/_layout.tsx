import { Slot, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RootLayout() {
  const router = useRouter();
  const go = (path: any) => {
    router.push(path);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.content}>
        <Slot />
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navBtn} onPress={() => go('/')}>
          <Text style={styles.navTxt}>1</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navBtn} onPress={() => go('/explore')}>
          <Text style={styles.navTxt}>2</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navBtn} onPress={() => go('/about')}>
          <Text style={styles.navTxt}>3</Text>
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
  navTxt: { color: 'white', fontWeight: 'bold' }
});