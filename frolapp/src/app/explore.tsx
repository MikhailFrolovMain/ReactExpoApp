import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>PODROBNO</Text>

      <Text style={styles.sectionTitle}>MOJA GALERIJA</Text>
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        style={styles.galleryContainer}
      >
        {/* Замени на свои фотки */}
        <Image style={styles.galleryImage} source={require('../../assets/images/photo_2026-10-05_23-59-50.jpg')} />
        <View style={styles.galleryPlaceholder}><Text style={styles.placeholderText}>FOTKA 2</Text></View>
        <View style={styles.galleryPlaceholder}><Text style={styles.placeholderText}>FOTKA 3</Text></View>
      </ScrollView>

      <Text style={styles.sectionTitle}>MOJE ORODJE</Text>
      <View style={styles.phoneBlock}>
        <View style={styles.phoneImagePlaceholder}>
           <Text style={styles.placeholderText}>Slika Nothing Phone 2a</Text>
        </View>
        <Text style={styles.phoneTitle}>NOTHING PHONE 2a</Text>
        <Text style={styles.phoneDesc}>
          Uporabljam Nothing Phone 2a. Njegova kamera ima edinstven dizajn z dvema lečama, ki sta postavljeni vodoravno na sredini zadnje strani. To daje telefonu prepoznaven "oči" videz, popolnoma v skladu z mojim stilom.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    padding: 20,
    paddingBottom: 120, 
  },
  header: {
    fontFamily: 'BebasNeue_400Regular',
    color: "#ffffff",
    fontSize: 40,
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: 'BebasNeue_400Regular',
    color: '#446d16', 
    fontSize: 28,
    marginTop: 10,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#446d16',
    paddingBottom: 5,
  },
  galleryContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  galleryImage: {
    width: width * 0.75, 
    height: 350,
    borderRadius: 15,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#446d16',
  },
  galleryPlaceholder: {
    width: width * 0.75,
    height: 350,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#333',
  },
  placeholderText: {
    fontFamily: 'BebasNeue_400Regular',
    color: '#666',
    fontSize: 24,
  },
  phoneBlock: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#333',
  },
  phoneImagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  phoneTitle: {
    fontFamily: 'BebasNeue_400Regular',
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 10,
  },
  phoneDesc: {
    fontFamily: 'System', // Обычный шрифт для читаемости
    color: '#ccc',
    fontSize: 16,
    lineHeight: 24,
  },
});