import { StyleSheet } from "react-native";
import { colors, HP, WP } from "../../shared/exporter";

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'center',
        backgroundColor: colors.gray_bg,
        color: colors.gray_text,
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 16,
        marginHorizontal: WP('1')
    }
})

export default styles