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
        <Image style={styles.galleryImage} source={require('../../assets/images/photo_2026-10-05_23-59-50.jpg')} />
        <Image style={styles.galleryImage} source={require('../../assets/images/photoes/photo_2026-10-12_21-52-27.jpg')} />
        <Image style={styles.galleryImage} source={require('../../assets/images/photoes/photo_2026-10-12_21-52-40.jpg')} />
        <Image style={styles.galleryImage} source={require('../../assets/images/photoes/photo_2026-10-12_21-52-42.jpg')} />
        <Image style={styles.galleryImage} source={require('../../assets/images/photoes/photo_2026-10-12_21-52-43.jpg')} />
        <Image style={styles.galleryImage} source={require('../../assets/images/photoes/photo_2026-10-12_21-52-45.jpg')} />
        <Image style={styles.galleryImage} source={require('../../assets/images/photoes/photo_2026-10-12_21-52-46.jpg')} />
        <Image style={styles.galleryImage} source={require('../../assets/images/photoes/photo_2026-10-12_21-52-48.jpg')} />
      </ScrollView>

      <Text style={styles.sectionTitle}>MOJE ORODJE</Text>
      <View style={styles.phoneBlock}>
        <View style={styles.phoneImagePlaceholder}>
           <Image style={styles.phoneImage} source={require('../../assets/images/photoes/image.png')} />
        </View>
        <Text style={styles.phoneTitle}>NOTHING PHONE 2a</Text>
        <Text style={styles.phoneDesc}>
          Uporabljam Nothing Phone (2a). Zadnji modul s kamero meni zgleda kot oči minjona: 
          {'\n\n'}• Glavna kamera: 50 MP (zaslonka f/1.88) z optično stabilizacijo (OIS).
          {'\n'}• Ultraširoka kamera: 50 MP (zaslonka f/2.2) s 114-stopinjskim kotom zajema.
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
    color: '#fbfbfb', 
    fontSize: 28,
    marginTop: 10,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff',
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
    borderColor: '#fcfcfc',
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
    overflow: 'hidden', 
  },
  phoneImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
  phoneTitle: {
    fontFamily: 'BebasNeue_400Regular',
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 10,
  },
  phoneDesc: {
    fontFamily: 'System', 
    color: '#ccc',
    fontSize: 16,
    lineHeight: 24,
  },
});