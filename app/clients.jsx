import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import ButtonBack from '../components/ButtonBack'
import { router } from 'expo-router'
import { theme } from '../constants/Colors'

const Clients = () => {
    return (
        <ScreenWrapper>
            <ButtonBack router={router}/>

            <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View style={[styles.groupItem, styles.groupLayout]} />
                <Text style={[styles.drMariaWastonContainer, styles.text6Typo]}>
                    <Text style={styles.mohamed}>Mohamed</Text>
                    <Text style={styles.text5}>{` `}</Text>
                    <Text style={styles.mohamed}>Qassimi</Text>
                </Text>
                <Text style={[styles.text6, styles.text6Typo]}>+212612345678</Text>
                <View style={[styles.groupInner, styles.groupPosition]} />
                <Image
                style={styles.groupPosition}
                contentFit="cover"
                source={require("../assets/images/profile.jpg")}
                />
            </View>
        </ScreenWrapper>
    )
}

export default Clients;

const styles = StyleSheet.create({
    rectangleParent: {
        top: 118,
        left: 296,
    },
    groupItem: {
        borderRadius: 17,
        borderStyle: "solid",
        borderColor: 'gray',
        borderWidth: 2,
        left: 0,
        top: 0,
        backgroundColor: 'white',
    },
    groupPosition:{
        width: 100,
        height: 100,
    },
    mohamed: {
        fontSize: theme.fonts.medium,
    },
    text5: {
        fontSize: theme.fonts.medium,
    },
    drMariaWastonContainer: {
        lineHeight: 19,
        color: theme.colors.gray,
        height: 14,
        top: 16,
        left: 99,
    },
    text6: {
        top: 38,
        letterSpacing: 0.2,
        lineHeight: 13,
        color: theme.colors.text,
        left: 99,
        fontSize: theme.fonts.semibold,
        height: 11,
      },
      groupInner: {
        borderRadius: theme.radius.xl,
        backgroundColor: theme.colors.gray,
      },
      rectangleGroup: {
        top: 201,
        left: 24,
      },
      rectangleContainer: {
        top: 540,
        left: 24,
      },
      groupView: {
        top: 455,
        left: 24,
      },
      rectangleParent2: {
        top: 84,
        left: 3,
      },
      rectangleParent1: {
        top: 286,
        left: 21,
        width: 326,
        height: 161,
        position: "absolute",
      },
      clients: {
        height: 812,
        overflow: "hidden",
        width: "100%",
        borderRadius: theme.radius.xl,
        flex: 1,
        backgroundColor: 'white',
      },
})