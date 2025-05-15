import { StyleSheet } from "react-native";
import { colors, HP } from "../../shared/exporter";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: HP('1')
    },
    logoContainer: {
        height: 44,
        width: 44,
        borderRadius: 22,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appLogo: {
        height: 28,
        width: 28,
    },
    cartText: {
        fontFamily: 'Poppins',
        fontSize: 28,
        fontWeight: 400
    },
    appDp: {
        height: 44,
        width: 44,
        borderRadius: 22
    }
})

export default styles