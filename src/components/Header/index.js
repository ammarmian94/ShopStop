import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { appLogos } from '../../shared/exporter'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={appLogos.appLogo} style={styles.appLogo} />
            </View>

            <Image source={appLogos.appDp} style={styles.appDp} />
        </View>
    )
}

export default Header