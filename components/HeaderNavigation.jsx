import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { hp, wp } from '../helpers/common';
import { theme } from '../constants/Colors';

const HeaderNavigation = ({title}) => {
    return (
        <View style={styles.headerContainer}>

            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default HeaderNavigation;


const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: wp(4),
        paddingVertical: hp(2),
        backgroundColor: 'white',
        elevation: 4,  // Android shadow
        shadowColor: '#000',  // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.text,
        flexGrow: 1,   // Ensures title grows to fill space between elements
        textAlign: 'center',  // Centered title
        // paddingRight: wp(10), // Prevent overlap with back button
    },
});