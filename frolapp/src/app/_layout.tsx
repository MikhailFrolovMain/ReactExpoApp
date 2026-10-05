import { Slot, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RootLayout() {
  const router = useRouter();

  // funkciya perehoda
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
          <Text style={styles.navTxt}>Glavnaya</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navBtn} onPress={() => go('/explore')}>
          <Text style={styles.navTxt}>Podrobnee</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navBtn} onPress={() => go('/about')}>
          <Text style={styles.navTxt}>O sebe</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0984e3',
    paddingVertical: 15,
    paddingBottom: 30,
  },
  navBtn: { padding: 10 },
  navTxt: { color: 'white', fontWeight: 'bold' }
});