import { StyleSheet } from "react-native";
import { colors, HP, WP } from "../../shared/exporter";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        marginTop: HP('3'),
    },
    coverImage: {
        height: 256,
        width: '90%',
        borderRadius: 20,
        marginBottom: HP('1'),
        marginLeft: WP('3')
    },
    content: {
        marginLeft: WP('3')
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
        color: colors.price_text
    },
    likeContainer: {
        width: 34,
        height: 34,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        position: 'absolute',
        top: 15,
        right: 15
    }
})

export default styles