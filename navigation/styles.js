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
    fabCounter: {
      position: 'absolute',
      width: 70,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      left: 30,
      bottom: 30,
      borderRadius: 30,
      backgroundColor: 'tomato'
    },
    return: {
      position: 'absolute',
      width: 70,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 120,
      borderRadius: 30,
      backgroundColor: 'tomato'
    },
    counter: {
      fontSize: 32,
      fontWeight: "bold",
      color: '#fff'
    },
    listComponents: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    rowContainer: {
      position: 'absolute',
      left: 110,
      top: 30,
      alignItems: "center",
      flexDirection: 'row',
      padding: 8
    },
    itemContainer: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: "center",
      justifyContent: "flex-start",
      margin: 8,
      padding: 28,
      flexDirection: 'row'
    },
    itemTitle: {
      fontSize: 28,
      marginRight: 8,
      fontWeight: "bold",
    },
    itemText: {
      fontSize: 20,
    }
  });