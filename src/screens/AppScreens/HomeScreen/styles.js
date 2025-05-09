import { StyleSheet } from "react-native";
import { colors, HP, StatusBarHeight, WP } from "../../../shared/exporter";

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        // marginTop: StatusBarHeight
    },
    innerContainer: {
        marginTop: StatusBarHeight,
        padding: WP('6')
    },
    matchText: {
        fontSize: 28,
        color: colors.black,
        marginTop: HP('2'),
        fontFamily: 'Poppins',
        fontWeight: 400
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        alignItems: 'center',
        height: 48,
        borderRadius: 12,
        marginVertical: HP('2')
    },
    iconContainer: {
        marginHorizontal: WP('3')
    }
})

export default styles