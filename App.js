import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from "./src/navigations/Navigation"
import Home from './src/screens/Home'

const App = () => {
  return(
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  )
}

export default Home;