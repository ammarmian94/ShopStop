import { StyleSheet } from "react-native";
import { colors, HP, StatusBarHeight, WP } from "../../../shared/exporter";

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        marginTop: StatusBarHeight,
        padding: WP('6')
    },
    priceContainer: {
        marginVertical: HP('3')
    },
    priceAndTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: HP('1')
    },
    priceText: {
        fontFamily: "Poppins",
        fontSize: 18,
        fontWeight: 500,
        color: '#757575'
    },
    priceValue: {
        fontFamily: "Poppins",
        fontSize: 18,
        fontWeight: 600,
        color: '#888888'
    },
    divider: {
        borderWidth: 1,
        borderColor: '#C0C0C0',
        marginVertical: HP('2')
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