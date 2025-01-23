import { Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { createStyleSheet } from "react-native-unistyles";

export const modelStyles = createStyleSheet(({ device, border, colors }) => ({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.background,
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 2,
        zIndex: 1,
        shadowColor: colors.text,
        padding: 10
    },
    vegIcon: {
        width: 15,
        height: 15,
        top: 3,
        resizeMode: "contain"
    },
    noShadowHeaderContainer: {
        borderBottomWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.background,
        zIndex: 1,
        padding: 15
    },
    flexRowGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4
    },
    flexRowItemBaseline: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderBottomColor: colors.border
    },
    flexRowGapBaseline: {
        flexDirection: 'row',
        width: "70%",
        alignItems: 'flex-start',
        gap: 10,
    },
    icon: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: colors.background,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        elevation: 5,
        shadowRadius: 3,
        borderRadius: 100,
        shadowColor: colors.text,
    },
    headerImage: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        borderRadius: 12
    },
    scrollContainer: {
        backgroundColor: colors.background_light,
        padding: 10,
    },
    scrollContainerWhiteBackground: {
        backgroundColor: colors.background,
        padding: 10,
    },
    subContainer: {
        backgroundColor: colors.background,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Ensures vertical alignment
        justifyContent: 'space-between', // Space between quantity selector and button
        backgroundColor: colors.background,
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        elevation: 8,
        shadowRadius: 4,
        zIndex: 2,
        shadowColor: colors.text,
        paddingHorizontal: 10, // Horizontal padding for internal spacing
        paddingVertical: Platform.OS === 'ios' ? 15 : 10, // Adjust for platform differences
        borderTopWidth: 1,
        borderTopColor: colors.border,
      },
    noShadowFooterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
        padding: 15,
        paddingBottom: Platform.OS === 'ios' ? 30 : 10
    },
    selectedContainer: {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: colors.active,
        borderRadius: 12,
        backgroundColor: colors.active_light,
        width: '30%', 
        overflow: 'hidden', 
      },
      
      animatedCount: {
        fontSize: RFValue(16),
        color: colors.text,
        fontFamily: 'Okra-Bold',
        textAlign: 'center', 
        marginHorizontal: 5, 
        lineHeight: 45, 
      },
    
    
    addButtonContainer: {
        backgroundColor: colors.active,
        borderRadius: 10,
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45
    },
    selectedOptions: {
        opacity: 0.6,
        marginTop: 2
    },
    cartOperationContainer: {
        width: '25%',
        alignItems: "flex-end",
        justifyContent: 'flex-end'
    },
    miniAddButtonContainer: {
        backgroundColor: colors.active_light,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: "row",
        borderColor: colors.border,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 30
    },
    miniAnimatedCount: {
        fontSize: RFValue(12),
        color: colors.text,
        fontFamily: 'Okra-Bold',
        marginHorizontal: 12,
        marginLeft: 14,
    },
}))