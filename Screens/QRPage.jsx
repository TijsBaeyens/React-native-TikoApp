import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function QRPage({ navigation }) {
  const [isScanning, setIsScanning] = useState(true);
  const requestCameraPermission = async () => {
      Camera.requestCameraPermissionsAsync();
  };
  requestCameraPermission();

  const GetCurrentDateTime = () => {
    var currentdate = new Date();
    var datetime =
      currentdate.getFullYear() +
      currentdate.getMonth() + 1 +
      currentdate.getDate();
    return datetime;
  }

  const handleBarCodeScanned = ({ data }) => {
    setIsScanning(false);
    fetchDataFromApi(data);
  };

  const fetchDataFromApi = (inputData) => {
    fetch(`https://www.tikoo.be/ticket/verify?g=${inputData}&dt=20231125`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((apiData) => {
        if (apiData.code == 'OK' && apiData.status == 200) {
          navigateToOkPage(apiData);
        } else if (apiData.code != 'OK') {
          navigateToNOKPage(apiData);
        } else {
          console.error('Invalid API response:', apiData);
        }
      })
      .catch((error) => {
        if(error instanceof SyntaxError) {
          navigateToErrorPage();
        } else {
        console.error('Error calling the API:', error);
        }
      });
  };
  
  const navigateToNOKPage = (apiData) => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'NOKPage', params: { message: apiData.message } }],
    });
  };

  const navigateToOkPage = (apiData) => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'OKPage', params: { seat: apiData.seat } }],
    });
  };

  const navigateToErrorPage = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'ErrorPage' }],
    });
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        onBarCodeScanned={isScanning ? handleBarCodeScanned : undefined}
      >
        <View style={styles.overlay} />
      </Camera>

      <View style={styles.resultContainer}>
          <Text style={styles.scanPrompt}>Scan a QR Code</Text>
      </View>

      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => {
          setIsScanning(true);
        }}
      >
        <Text style={styles.buttonText}>Scan Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  camera: {
    width: '100%',
    height: '70%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 2,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  scanResult: {
    fontSize: 20,
    color: 'white',
  },
  dataText: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
  scanPrompt: {
    fontSize: 20,
    color: 'white',
  },
  scanButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
