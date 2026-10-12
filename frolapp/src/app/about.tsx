import { Image, StyleSheet, Text, View } from 'react-native'; // Добавлен импорт Image

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>O MENI</Text>

      <Text style={styles.sectionTitle}>Osebni podatki</Text>
      
      {/* Твоя фотография */}
      <Image style={styles.profileImage} source={require('../../assets/images/photoes/photo_2026-10-12_22-04-12.jpg')} />
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>STAROST</Text>
          <Text style={styles.statValue}>16</Text> 
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>VIŠINA</Text>
          <Text style={styles.statValue}>193 cm</Text> 
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>TEŽA</Text>
          <Text style={styles.statValue}>82.5 kg</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>STATUS</Text>
          <Text style={styles.statValue}>Dijak 3.TRA</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'BebasNeue_400Regular',
    color: "#ffffff",
    fontSize: 40,
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: 'BebasNeue_400Regular',
    color: '#fdfdfc',
    fontSize: 28,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#fefefe',
    paddingBottom: 5,
  },
 
  profileImage: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fdfdfd',
    marginBottom: 20,
    resizeMode: 'cover',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statItem: {
    width: '48%', 
    backgroundColor: '#1e1e1e',
    padding: 20, 
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#fdfdfd',
    alignItems: 'center', 
  },
  statLabel: {
    fontFamily: 'BebasNeue_400Regular',
    color: '#fcfcfc',
    fontSize: 20,
    marginBottom: 5,
  },
  statValue: {
    fontFamily: 'BebasNeue_400Regular',
    color: '#ffffff',
    fontSize: 32,
  }
});