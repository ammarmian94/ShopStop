import { StyleSheet } from "react-native";
import { colors, HP, WP } from "../../shared/exporter";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: HP('2')
    },
    imageContainer: {
        height: 150,
        width: '25%',
        borderRadius: 20,
    },
    cardContent: {
        flex: 1,
        marginLeft: WP('3'),
    },
    title: {
        fontSize: 18,
        fontWeight: 500,
        fontFamily: 'poppins',
    },
    price: {
        fontSize: 18,
        fontWeight: 500,
        fontFamily: 'poppins',
        color: colors.price_text,
        marginVertical: HP('2')
    },
    colorSizeContainer: {
        flexDirection: 'row'
    },
    color: {
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: colors.p1,
        marginRight: WP('3')
    },
    size: {
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sizeText: {
        fontFamily: "Poppins",
        fontSize: 18,
        fontWeight: 500
    },
   
})

export default styles

