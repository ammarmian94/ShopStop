import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'

const SplashScreen = ({ navigation }) => {


    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('After')
        }, 2000)

        return () => clearTimeout(timer)
    }, [navigation])

    return (
        <View style={styles.rootContainer}>
            <Text>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen