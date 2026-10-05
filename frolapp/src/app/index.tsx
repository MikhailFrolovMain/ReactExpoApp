import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function IndexScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
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

      {/* Контейнер под 3D-модель */}
      <View style={styles.modelContainer}>
        <Text style={styles.modelPlaceholderText}>[ 3D MODEL PLACEHOLDER ]</Text>
        {/* Сюда позже добавим Canvas и твою модельку */}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f5f6fa', 
  },
  content: {
    padding: 20,
    paddingBottom: 120, // Оставляем место снизу для нашего меню
  },
  header: {
    fontFamily: 'BebasNeue_400Regular',
    color: "#000000",
    fontSize: 40,
    marginTop: 20,
    marginBottom: 10,
  }, 
  photo: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 15,
  }, 
  text: {
    fontFamily: 'BebasNeue_400Regular',
    color: "#000000",
    fontSize: 28,
    marginBottom: 10,
  },
  text1: {
    fontFamily: 'BebasNeue_400Regular',
    color: "#333",
    fontSize: 22,
    marginBottom: 10,
  },
  listContainer: {
    marginBottom: 20,
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
    color: '#222',
  },
  modelContainer: {
    width: '100%',
    height: 220,
    backgroundColor: '#e2e8f0',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#446d16',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  modelPlaceholderText: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 18,
    color: '#666',
  }
});