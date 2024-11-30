import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Kotak 1 */}
      <View style={[styles.box, styles.box1]}></View>
      
      {/* Teks di tengah */}
      <Text style={styles.text}>Ini adalah teks di tengah layar</Text>

      {/* Kotak 2 */}
      <View style={[styles.box, styles.box2]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Container dengan Flexbox
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Latar belakang abu-abu terang
    flexDirection: 'row', // Menempatkan kotak secara horizontal
    justifyContent: 'space-between', // Jarak merata antara kotak
    alignItems: 'center', 
    paddingHorizontal: 20,
  },
  // Teks di tengah
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },
  // Gaya untuk kotak
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: 'red', 
  },
  box2: {
    backgroundColor: 'green',
  },
});

export default App;
