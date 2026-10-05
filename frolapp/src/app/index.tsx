import { Image, StyleSheet, Text, View } from 'react-native';

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Domača Stran</Text>
      
      <Image style={styles.photo} source={require('../../assets/images/photo_2026-10-05_23-59-50.jpg')} />
      
      <Text style={styles.text}>Mikhail Frolov, dijak 3.TRA</Text>
      
      <Text style={styles.text1}>Aplikacija predstavlja:</Text>

      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>■</Text>
          <Text style={styles.listText}>Mene</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>■</Text>
          <Text style={styles.listText}>Moje programerske sposobnosti / izkušnje</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>■</Text>
          <Text style={styles.listText}>Moje 3D modelerske sposobnosti / izkušnje</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>■</Text>
          <Text style={styles.listText}>Moje zanimanje za fotografijo</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f5f6fa', 
    padding: 20,
    justifyContent: 'center', // Центрируем контент красиво по вертикали экрана
  },
  header: {
    fontFamily: 'BebasNeue_400Regular',
    color: "#000000",
    fontSize: 36,
    marginBottom: 5,
  }, 
  photo: {
    width: '100%',
    height: 180, // Сделали чуть компактнее, чтобы точно влезло без скролла
    borderRadius: 15,
    marginBottom: 10,
  }, 
  text: {
    fontFamily: 'BebasNeue_400Regular',
    color: "#000000",
    fontSize: 24,
    marginBottom: 8,
  },
  text1: {
    fontFamily: 'BebasNeue_400Regular',
    color: "#333",
    fontSize: 20,
    marginBottom: 6,
  },
  listContainer: {
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  bullet: {
    fontSize: 12,
    color: '#446d16',
    marginRight: 8,
  },
  listText: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 18,
    color: '#222',
  },
});