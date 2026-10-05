import { Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function IndexScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Domača Stran</Text>
      <Image style={styles.photo} source={require('../../assets/images/photo_2026-10-05_23-59-50.jpg')} />
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
    bottom: -500,
    height: 250,
    borderRadius: 15,
  }
});