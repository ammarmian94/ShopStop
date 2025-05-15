import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import Header from '../../../components/Header'
import CartCard from '../../../components/CartCard'
import { CartContext } from '../../../context/CartContext'

const CartScreen
  = () => {
    const { carts, totalPrice, deleteItemFromCart } = useContext(CartContext)
    return (
      <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.rootContainer}>
        <View style={styles.innerContainer}>
          <Header isCart={true} />

          <View style={{ flex: 1 }}>
            <FlatList
              data={carts}
              keyExtractor={(item)=>item.id}
              renderItem={({ item }) => <CartCard item={item} deleteItemFromCart={deleteItemFromCart} />}
              ListFooterComponent={
                <>
                  <View style={styles.priceContainer}>
                    <View style={styles.priceAndTitle}>
                      <Text style={styles.priceText}>Total:</Text>
                      <Text style={styles.priceValue}>${totalPrice}</Text>
                    </View>
                    <View style={styles.priceAndTitle}>
                      <Text style={styles.priceText}>Shipping:</Text>
                      <Text style={styles.priceValue}>$0.0</Text>
                    </View>
                    <View style={styles.divider}></View>
                    <View style={styles.priceAndTitle}>
                      <Text style={styles.priceText}>Grand Total:</Text>
                      <Text style={[styles.priceValue, { color: "#3C3C3C" }]}>${totalPrice}</Text>
                    </View>
                  </View>
                </>
              }
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 100
              }}
            />
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Check Out</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    )
  }

export default CartScreen
