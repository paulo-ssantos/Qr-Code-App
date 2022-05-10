import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import homeScreen from "./screens/home.js"
import aboutScreen from "./screens/about"

const screens = {
  Scanner: {
    screen: homeScreen,
  },
  About: {
    screen: aboutScreen,
  },
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)
