import { Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function IndexScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Domača Stran</Text>
      <Image style={styles.photo} source={require('../../assets/images/photo_2026-10-05_23-59-50.jpg')} />
      <Text style={styles.text}>Mikhail Frolov, dijak 3.TRA</Text>
      <Text style={styles.text1}>Aplikacija predstavlja:</Text>
      <Text style={styles.text1}>Mene</Text>
      <Text style={styles.text1}>Moje programerske sposobnosti/iskušnje</Text>
      <Text style={styles.text1}>Moje 3D modeljerkse sposobnosti/iskušnje</Text>
      <Text style={styles.text1}>Moje zanimanje za fotografijo</Text>
    </ScrollView>

    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f5f6fa', 
  },
  photo: {
    width: '90%',
    left: 20,
    bottom: -50,
    height: 250,
    borderRadius: 15,
  }, 
  header: {
    fontFamily: 'BebasNeue_400Regular',
    color: "#000000",
    fontSize: 35,
    top: 50,
    left: 20,
  }, 
  text: {
    fontFamily: 'BebasNeue_400Regular',
    color: "#000000",
    fontSize: 28,
    left: 20,
    top: 65,

  },
  text1: {
    fontFamily: 'BebasNeue_400Regular',
    color: "#000000",
    fontSize: 22.5,
    left: 20,
    top: 65,
  }
});