import { StyleSheet } from "react-native";
import { colors, HP, StatusBarHeight, WP } from "../../../shared/exporter";

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    innerContainer: {
        marginTop: StatusBarHeight,
        paddingHorizontal: WP('6'),
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logoContainer: {
        height: 44,
        width: 44,
        borderRadius: 22,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    coverImage: {
        height: 413,
        width: '100%',
        marginTop: HP('2')
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: HP('-2')
    },
    title: {
        fontSize: 20,
        fontWeight: 500,
        fontFamily: 'Poppins',
        color: colors.title
    },
    price: {
        color: '#4D4C4C'
    },
    sizeText: {
        marginTop: HP('3')
    },
    sizeContainer: {
        flexDirection: 'row'
    },
    sizeValueContainer: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: WP('2'),
        marginTop: HP('2')
    },
    sizeValue: {
        fontSize: 18
    },
    colorContainer: {
        flexDirection: 'row'
    },
    colorBorder: {
        height: 48,
        width: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: WP('1'),
        marginTop: HP('2')
    },
    circle: {
        height: 36,
        width: 36,
        borderRadius: 18,
    },
    addButton: {
        height: 66,
        backgroundColor: colors.p1,
        borderRadius: 20,
        marginTop: HP('2'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButtonText: {
        fontSize: 24,
        fontWeight: 600,
        fontFamily: "Poppins",
        color: colors.white
    }
})

export default styles