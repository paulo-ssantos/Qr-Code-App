import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    margin: 20,
    fontWeight: "bold",
  },
  maintext: {
    fontSize: 28,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },
  botao: {
    backgroundColor: "navy",
    color: "lightgrey",
    padding: 5,
  },
  fab: {
      position: 'absolute',
      width: 70,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
      borderRadius: 30,
      backgroundColor: 'tomato'
    },
    listComponents: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    }
  });