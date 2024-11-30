import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Kontainer untuk dua kotak dan teks */}
      <View style={styles.kotakContainer}>
        {/* Kotak 1 (Pink) */}
        <View style={[styles.kotak, styles.kotak1]} />
        
        {/* Teks yang berada di tengah antara kotak 1 dan kotak 2 */}
        <Text style={styles.text}>Enjela 5C</Text>
        
        {/* Kotak 2 (Yellow) */}
        <View style={[styles.kotak, styles.kotak2]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Mengatur container utama untuk mengatur tata letak Flexbox
  container: {
    flex: 1, // Membuat container menggunakan seluruh layar
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
    justifyContent: 'center', // Menempatkan konten utama (kotak dan teks) di tengah secara vertikal
    alignItems: 'center', // Menempatkan konten utama secara horizontal di tengah
    padding: 20, // Memberikan sedikit jarak di sekitar konten
  },

  // Kontainer Flexbox untuk menempatkan kotak secara horizontal dan teks di tengah
  kotakContainer: {
    flexDirection: 'row', // Menyusun kotak dan teks secara horizontal
    justifyContent: 'center', // Menempatkan elemen secara merata di tengah
    alignItems: 'center', //teks tetap sejajar dengan kotak secara vertikal
    width: '80%', // Menentukan lebar kontainer untuk kotak
  },

  // Gaya teks di antara kotak 1 dan kotak 2
  text: {
    fontSize: 24,
    fontWeight: 'bold', 
    color: 'blue', 
    textAlign: 'center', // Menjaga teks tetap di tengah
    marginHorizontal: 20, // Memberikan sedikit jarak antara teks dan kotak
  },

  kotak: {
    width: 100, // Ukuran kotak 100px
    height: 100, // Ukuran kotak 100px
  },

  kotak1: {
    backgroundColor: 'pink', // Warna kotak pertama
  },

  kotak2: {
    backgroundColor: 'yellow', // Warna kotak kedua
  },
});
