import { StyleSheet, Platform } from 'react-native';
import { size } from './devices';

export const Colors = {
    BACKGROUND      : 'rgb(244,246,251)',
    PINK            : 'rgb(229,74,80)',
    RED             : 'rgb(253,77,55)',
    GRAY_TEXT       : '#666666',
    LINK_TEXT       : '#7F82A0',
    BLACK           : '#000000',
    WHITE           : '#ffffff',
    SHADOW          : '#dddddd',
    BORDER          : '#dddddd',
    FACEBOOK        : '#5055B1',
    ACTIVE_TAB      : '#545493',
    INACTIVE_TAB    : '#D8D9EA',
    CARD_INFO_BG    : '#302D7C',
    CARD_BODY_BG    : '#242164',
}

export const Styles = {
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
    },
    contentContainer: {
        paddingHorizontal: size(50) / 2,
    },
    sectionFirst: {
        alignItems: 'center',
        marginBottom: size(24),
        marginTop: size(24),
    },
    section: {
        alignItems: 'center',
        marginBottom: size(24),
    },
    sectionLast: {
        alignItems: 'center',
    },
    textTitle: {
        textAlign: 'center',
        fontSize: size(24),
        fontWeight: '600',
        color: Colors.BLACK,
    },
    textNormal: {
        textAlign: 'center',
        fontSize: size(16),
        fontWeight: '300',
        color: Colors.GRAY_TEXT,
    },
    textSmall: {
        textAlign: 'center',
        fontSize: size(10),
        fontWeight: '400',
        color: Colors.WHITE,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.RED,
        alignSelf: 'stretch',
        paddingVertical: size(13),
        borderRadius: size(4),
        shadowColor: Colors.SHADOW, shadowOffset: { width: 0, height: size(5) }, shadowOpacity: 0.8, shadowRadius: size(2),
        elevation: 1,
        marginBottom: size(13),
    },
    buttonIcon: {
        marginRight: size(10),
    },
    buttonIconSize: size(20),
    buttonText: {
        fontSize: size(18),
        fontWeight: '600',
        color: Colors.WHITE,
    },
    buttonLink: {
        marginBottom: size(24),
        marginTop: size(24),
    },
    buttonLinkText: {
        fontSize: size(14),
        fontWeight: '400',
        color: Colors.LINK_TEXT,
    },
    inputGroup: {
        alignItems: 'flex-start',
    },
    inputLabel: {
        paddingBottom: size(6),
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: size(10),
        borderRadius: size(4), borderColor: Colors.BORDER, borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: Colors.WHITE,
    },
    input: {
        flex: 1,
        marginRight: size(10),
    },
    inputIconSize: size(20),
    avatar: {
        width: size(75),
        height: size(75),
        borderRadius: Platform.OS === 'ios' ? size(75) / 2 : size(150) / 2,
        resizeMode: 'contain',
    },
    cardContainer: {
        margin: size(20),
        shadowColor: Colors.SHADOW, shadowOffset: { width: size(5), height: size(5) }, shadowOpacity: 0.8, shadowRadius: size(8),
        backgroundColor: 'transparent',
    },
    cardHeader: {
        borderTopLeftRadius: size(15), borderTopRightRadius: size(15),
        borderColor: Colors.BORDER, borderWidth: StyleSheet.hairlineWidth,
        padding: size(15),
        backgroundColor: Colors.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBody: {
        borderColor: Colors.CARD_INFO_BG, borderWidth: StyleSheet.hairlineWidth,
        padding: size(15),
        backgroundColor: Colors.CARD_INFO_BG,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    cardFooter: {
        borderBottomLeftRadius: size(15), borderBottomRightRadius: size(15),
        borderColor: Colors.CARD_BODY_BG, borderWidth: StyleSheet.hairlineWidth,
        padding: size(25),
        backgroundColor: Colors.CARD_BODY_BG,
    },
}
