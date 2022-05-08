import React, { useState } from "react"
import {
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
  FlatList,
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import * as Clipboard from "expo-clipboard"
import { style } from "../styles"

export default function App({ navigation }) {
  const [history, setHistory] = useState(navigation.state.params.history)
  const [scanned, setScanned] = useState(false)

  return (
    <View style={style.container}>
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={style.itemContainer}
            onPress={() => {
              Clipboard.setString(item.data)
              ToastAndroid.show("Copy to Clipboard", 2000)
            }}
          >
            <Text style={style.itemTitle}>{item.id}:</Text>
            <Text style={style.itemText}>{item.data}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity onPress={() => setHistory([])} style={style.fab}>
        <Icon name="close" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}
