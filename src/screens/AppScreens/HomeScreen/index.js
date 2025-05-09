import { View, Text, Image, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../../../components/Header'
import Fontisto from "react-native-vector-icons/Fontisto"
import Category from '../../../components/Category'
import ProductCard from '../../../components/ProductCard'
import { HP } from '../../../shared/exporter'
import data from '../../../data/data.json'

const categories = ['Trending Now', 'All', 'New', 'Men', 'Women']

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [products, setProducts] = useState(data.products)

  const handleLiked = (item) => {
    const newProducts = products.map((prod) => {
      if (item.id === prod.id) {
        return {
          ...prod,
          isLiked: true
        }
      }
      return prod
    })
    setProducts(newProducts)
  }
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <Header />

        {/* Product List */}
        <FlatList
          numColumns={2}
          data={products}
          ListHeaderComponent={
            <>
              <Text style={styles.matchText}>Match Your Style</Text>
              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Fontisto name="search" size={26} color={'#C0C0C0'} />
                </View>
                <TextInput style={styles.textInput} placeholder='Search' />
              </View>
              {/* Category Section */}
              <FlatList
                data={categories}
                renderItem={({ item }) => (
                  <Category
                    item={item}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory} />
                )}
                keyExtractor={(item) => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </>
          }
          renderItem={({ item, index }) => (
            <ProductCard
              item={item}
              handleLiked={handleLiked} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: HP('7')
          }}
        />

      </View>
    </LinearGradient>
  )
}

export default HomeScreen
