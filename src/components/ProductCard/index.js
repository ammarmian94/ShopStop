import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../shared/exporter'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({ item, handleLiked }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { item })} style={styles.container}>
            <Image
                source={{ uri: item.image }}
                style={styles.coverImage} />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => handleLiked(item)} style={styles.likeContainer}>
                {
                    item?.isLiked ? (
                        < AntDesign name='heart' size={20} color={colors.p1} />
                    ) : (
                        < AntDesign name='hearto' size={20} color={colors.p1} />

                    )
                }
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default ProductCard