import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, Button, ToastAndroid, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Clipboard from 'expo-clipboard';
import { style } from '../styles';

export default function App({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')
  const [value, setValue] = useState("empty")
  const [history, setHistory] = useState([])
  const [idCounter, setIdCounter] = useState(0)

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);



  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setIdCounter(idCounter+1)
    setScanned(true)
    setText(data)
    Clipboard.setString(data)
    ToastAndroid.show('Copy to Clipboard', 2000)
    setHistory( arr => [...arr, {id: idCounter, data: data}])
  };


  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={style.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={style.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={style.container}>
      <View style={style.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 800, width: 800 }} />
      </View>
      
      <Text style={style.maintext}>{text}</Text>
      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
      
      <TouchableOpacity
          //onPress={() => (navigation.push('About', history))}
          onPress={() =>
            navigation.navigate('About', {history})
          }
          style={style.fab}>
          <Icon name="history" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}