import AsyncStorage from "@react-native-async-storage/async-storage"

async function saveItem(data) {
  let dataList = []
  let idCounter = 0
  const response = await AsyncStorage.getItem("items")
  if (response) {
    dataList = JSON.parse(response)
    idCounter = dataList[Object.keys(dataList).length - 1].id
  }
  dataList = [...dataList, { id: idCounter + 1, data: data }]
  return await AsyncStorage.setItem("items", JSON.stringify(dataList))
}

function getItens() {
  return AsyncStorage.getItem("items").then((response) => {
    if (response) return Promise.resolve(JSON.parse(response))
    else return Promise.resolve([])
  })
}

module.exports = {
  saveItem,
  getItens,
}
