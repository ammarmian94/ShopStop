import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { colors } from '../../shared/exporter'

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
    return (
        <TouchableOpacity onPress={() => setSelectedCategory(item)}>
            <Text
                style={[
                    styles.categoryText,
                    selectedCategory === item &&
                    {
                        backgroundColor: colors.p1,
                        color: colors.white
                    }]}>
                {item}
            </Text>
        </TouchableOpacity>
    )
}

export default Category