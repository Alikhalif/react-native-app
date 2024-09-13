import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { theme } from '../constants/Colors';
import { hp, wp } from '../helpers/common';
import Loading from './Loading';
import Icon from '../assets/icons';  // Assuming this points to where the Google icon is

const ButtonGoogle = ({
    buttonStyle,
    textStyle,
    title = 'Sign in with Google',
    onPress = () => {},
    loading = false,
    hasShadow = true,
}) => {
    
    const shadowStyle = hasShadow ? {
        shadowColor: theme.colors.dark,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
    } : {};

    if (loading) {
        return (
            <View style={[styles.button, { backgroundColor: 'white' }, shadowStyle, buttonStyle]}>
                <Loading />
            </View>
        );
    }

    return (
        <Pressable
            onPress={onPress}
            style={[styles.button, shadowStyle, buttonStyle]}
        >
            <Icon name="google" />
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
    );
};

export default ButtonGoogle;

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.gray,
        height: hp(6.6),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.radius.xxl,
        paddingHorizontal: wp(3),
        margin: 3,
    },
    text: {
        fontSize: hp(2),
        marginLeft: 10,
        fontWeight: theme.fonts.bold,  // Fixed typo
        color: theme.colors.text,
    },
});
