// dobavil Image i ScrollView
import { Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fotografija</Text>
      
      {/* kartinka */}
      <Image 
        source={{ uri: '' }} 
        style={styles.image} 
      />
      
      <Text style={styles.desc}>
        Eto prilozhenie pro moe lubimoe delo.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  image: { width: '90%', height: 200, borderRadius: 10, marginBottom: 15 },
  desc: { fontSize: 16, textAlign: 'center', paddingHorizontal: 20 },
});