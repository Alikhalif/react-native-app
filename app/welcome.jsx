import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/Colors'
import Button from '../components/Button'

const Welcome = () => {

    const navigation = useNavigation();

    return (
        <ScreenWrapper bg="white">
            <StatusBar style="dark" />
            <View style={styles.container}>
                <Image resizeMode='contain' 
                    style={styles.welcomImage}
                    source={require('@/assets/images/welcomImgLivery.webp')}

                />
                <View style={{gap: 20}}>
                    <Text style={styles.title}>LiveriLiya!</Text>
                    <Text style={styles.punchline}>Lorem ipsum dolor rferendis. Modi, nihil folder for maiores!</Text>
                </View>

                <View style={styles.footer}>
                    <Button
                        title="Getting Started"
                        buttonStyle={{marginHorizontal: wp(3)}}
                        onPress={() => navigation.navigate('signUp')}
                    />
                    <View style={styles.bottomTextContainer}>
                        <Text style={styles.loginText}>
                            Already have an account!
                        </Text>
                        <Pressable>
                            <Text style={[styles.loginText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold}]}
                            onPress={() => navigation.navigate('login')}>
                                Login
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingHorizontal: wp(4)
    },
    welcomImage:{
        height: hp(40),
        width: wp(140),
        alignSelf: 'center'
    },
    title:{
        color: theme.colors.text,
        fontSize: hp(4),
        textAlign: 'center',
        fontWeight: theme.fonts.extraBold
    },
    punchline:{
        textAlign:'center',
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: theme.colors.text,
    },
    footer:{
        gap: 30,
        width:'100%'
    },
    bottomTextContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    }, 
    loginText:{
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.6)
    }

})