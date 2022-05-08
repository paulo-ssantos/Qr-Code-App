import React, { useState } from "react"
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native"
import { style } from "../styles"

export default function App({ navigation }) {
  const [history, setHistory] = useState(navigation.state.params.history)
}
