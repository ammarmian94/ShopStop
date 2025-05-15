import { Text, View } from 'react-native'
import React from 'react'
import MainStack from './src/navigation/StackNavigation'
import { CartProvider } from './src/context/CartContext'

const App = () => {
  return (
    <CartProvider>
      <MainStack />
    </CartProvider>
  )
}

export default App

