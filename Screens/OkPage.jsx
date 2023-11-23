import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function SuccesPage({ navigation, route }) {
  const scanAnotherOne = () => {
    navigation.navigate('QRPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="check" size={100} color="green" />
      </View>
      <Text style={styles.text}>Deze gast zit op stoel {route.params.seat}.</Text>
      <TouchableOpacity onPress={scanAnotherOne} style={styles.button}>
        <Text style={styles.buttonText}>Scan volgende QR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    marginTop: 30,
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
