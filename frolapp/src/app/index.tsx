import { Image, StyleSheet, Text, View } from 'react-native';

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dom</Text>
      

      <Image style={styles.photo} source={require('../../assets/images/photo_2026-10-05_23-59-50.jpg')} />
      
      <Text style={styles.text}>Mikhail Frolov,3.TRA</Text>
      <Text style={styles.text1}>Aplikacija predstavlja:</Text>

      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>*</Text>
          <Text style={styles.listText}>Mene</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>*</Text>
          <Text style={styles.listText}>Moje programerske sposobnosti / izkušnje</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>*</Text>
          <Text style={styles.listText}>Moje zanimanje za fotografijo</Text>
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
    fontSize: 36,
    marginBottom: 5,
  }, 
  photo: {
    width: '100%',
    height: 180, 
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fbfbfb',
  }, 
  text: {
    fontFamily: 'BebasNeue_400Regular',
    color: "#ffffff",
    fontSize: 24,
    marginBottom: 8,
  },
  text1: {
    fontFamily: 'BebasNeue_400Regular',
    color: "#aaaaaa",
    fontSize: 20,
    marginBottom: 15,
  },
  listContainer: {
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 14,
    color: '#446d16',
    marginRight: 10,
  },
  listText: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 20,
    color: '#dddddd',
  },
});