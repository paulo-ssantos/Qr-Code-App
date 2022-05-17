import React, { useState, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import {
  Text,
  View,
  Button,
  ToastAndroid,
  TouchableOpacity,
  Switch,
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { BarCodeScanner } from "expo-barcode-scanner"
import * as Clipboard from "expo-clipboard"
import { style } from "../styles"
import database from "../database"

export default function App({ route, navigation }) {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [text, setText] = useState("Not yet scanned")
  const [flashMode, setFlashMode] = useState(false)
  const [counterScan, setCounterScan] = useState(0)
  const [isFocused, setIsFocused] = useState(true)

  const askForCameraPermission = () => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === "granted")
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission()
  }, [route])

  // useEffect(() => {
  //   setIsFocused(true)
  // }, [hasPermission])

  // What happens when we scan the bar code

  const handleBarCodeScanned = async ({ type, data }) => {
    if (flashMode) {
      setScanned(false)
      let storageItens = await database.getItens()
      if (data != storageItens[storageItens.length - 1].data) {
        setCounterScan(counterScan + 1)
        database.saveItem(data)
        setText(data)
        Clipboard.setStringAsync(data)
        ToastAndroid.show("Copy to Clipboard", 2000)
      }
    } else {
      setScanned(true)
      setCounterScan(counterScan + 1)
      database.saveItem(data)
      setText(data)
      Clipboard.setStringAsync(data)
      ToastAndroid.show("Copy to Clipboard", 2000)
    }
  }

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={style.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    )
  }
  if (hasPermission === false) {
    return (
      <View style={style.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    )
  }

  // Return the View
  return (
    <View style={style.container}>
      <StatusBar style="auto" />
      <View style={style.barcodebox}>
        {isFocused && (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 800, width: 800 }}
          />
        )}
      </View>
      <Text style={style.maintext}>{text}</Text>
      {scanned && (
        <Button
          title={"Scan again?"}
          onPress={() => {
            setIsFocused(true)
            setScanned(false)
          }}
          color="tomato"
        />
      )}

      <View style={style.rowContainer}>
        <Text style={style.itemText}>Flashmode:</Text>
        <Switch
          rackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={flashMode ? "#fff" : "#f4f3f4"}
          onValueChange={() => {
            setFlashMode(!flashMode)
          }}
          value={flashMode}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          setIsFocused(false)
          setFlashMode(false)
          setScanned(true)
          navigation.navigate("About")
        }}
        style={style.fab}
      >
        <Icon name="history" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.fabCounter}
        onPress={() => {
          setIsFocused(!isFocused)
        }}
      >
        <Text style={style.counter}>{counterScan}</Text>
      </TouchableOpacity>
    </View>
  )
}
