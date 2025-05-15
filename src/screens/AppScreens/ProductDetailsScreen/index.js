import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../../../components/Header'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import { colors } from '../../../shared/exporter'
import { CartContext } from '../../../context/CartContext'


const Sizes = ['S', 'M', 'L', 'XL']
const Colors = ['#91A1B0', '#B11D1DD4', '#1F44A3C2', '#9F632AD4', '#1D752BDB', '#000000C9']

const ProductDetailsScreen = () => {
    const route = useRoute()
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)
    const item = route.params.item
    const { addToCart } = useContext(CartContext)
    const navigation = useNavigation()

    const handleAddToCart = (item) => {
        item.size = selectedSize;
        item.color = selectedColor
        addToCart(item)
        navigation.navigate('BottomTab', { screen: 'Cart' });
    }

    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.rootContainer}>
            <View style={styles.innerContainer}>
                <Header />
            </View>
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.innerContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={[styles.title, styles.price]}>${item.price}</Text>
                </View>

                {/* Size Section */}
                <Text style={[styles.title, styles.sizeText]}>Size</Text>
                <View style={styles.sizeContainer}>
                    {Sizes.map((size, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.sizeValueContainer}
                                onPress={() => setSelectedSize(size)}
                            >
                                <Text style={[styles.sizeValue,
                                selectedSize === size && {
                                    color: colors.p1
                                }]}>
                                    {size}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>

                {/* Colors Section */}
                <Text style={[styles.title, styles.sizeText]}>Colors</Text>
                <View style={styles.colorContainer}>
                    {Colors.map((color, index) => {
                        return (
                            <TouchableOpacity key={index} style={[styles.colorBorder, selectedColor === color && { borderColor: color, borderWidth: 2 }]} onPress={() => setSelectedColor(color)}>
                                <View style={[styles.circle, { backgroundColor: color }]}>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>

                <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(item)}>
                    <Text style={styles.addButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient >
    )
}

export default ProductDetailsScreen