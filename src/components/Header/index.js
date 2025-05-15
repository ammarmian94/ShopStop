import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { appLogos, colors } from '../../shared/exporter'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'


const Header = ({ isHome, isCart }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {isHome ? <View style={styles.logoContainer}>
                <Image source={appLogos.appLogo} style={styles.appLogo} />
            </View>
                : <TouchableOpacity style={styles.logoContainer} onPress={() => navigation.replace("After")}>
                    <Entypo name='chevron-left' size={24} color={colors.p1} />
                </TouchableOpacity>}
            {isCart && <Text style={styles.cartText}>My Cart</Text>}
            <Image source={appLogos.appDp} style={styles.appDp} />
        </View >
    )
}

export default Header