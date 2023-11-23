import { Button, Image, StyleSheet, View, Text } from 'react-native';
import React from 'react';

import tikooLogo from '../img/TikooLogo.png';

function StartPage({ navigation }) {
  const GoToQRPage = () => {
    navigation.navigate('QRPage', {AskCameraPermission: true});
  }
  return (
    <View style={styles.container}>
      <Image source={tikooLogo} style={styles.logo} />
      <Text style={styles.welcomeText}>Welkom op Tikoo!</Text>
             <View>
          <Text>Geselecteerd evenement: De kat in de kelder</Text>
          <Button title="Scan de QR codes" onPress={GoToQRPage} />
        </View>

    </View>
  );
}

export default StartPage;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 400,
      height: 200,
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
    },
  });
  
  