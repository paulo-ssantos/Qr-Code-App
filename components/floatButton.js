import React from 'react';
import { Pressable, Image, Text, View } from 'react-native';
import { style } from './componentsStyles';


export default function Inicio({navigation}) {
  
  return (
    <View style={style.container}>
      <Image style={style.imagem} source={"logo"}/>
      <Pressable onPress={() => (navigation.push('Home'))}>
          <Text style={style.botao}>Voltar</Text>
      </Pressable>
    </View>
  );
}