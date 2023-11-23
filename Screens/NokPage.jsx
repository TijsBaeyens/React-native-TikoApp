import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ErrorPage({ navigation, route }) {
  const scanAnotherOne = () => {
    navigation.navigate('QRPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="clear" size={100} color="red" />
      </View>
      <Text style={styles.text}>{route.params.message}</Text>
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
    color: 'red',
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
