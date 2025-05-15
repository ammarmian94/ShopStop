import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../shared/exporter'

const CartCard = ({ item, deleteItemFromCart }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.imageContainer} />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.colorSizeContainer}>
                    <View style={[styles.color, { backgroundColor: item.color }]}></View>
                    <View style={styles.size}>
                        <Text style={styles.sizeText}>{item.size}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => deleteItemFromCart(item)}>
                <MaterialCommunityIcons name="delete-outline" size={30} color={colors.p1} />
            </TouchableOpacity>
        </View>
    )
}

export default CartCard