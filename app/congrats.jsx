import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/Colors'
import Button from '../components/Button'
import { useRouter } from 'expo-router'
// import LottieView from 'lottie-react-native';

// let LottiePlayer = LottieView;
// if (Platform.OS === 'web') {
//     LottiePlayer = require('./dotlottie/react-player');
// }

const Congrats = () => {
    const navigation = useNavigation();
    const router = useRouter();

    return (
        <ScreenWrapper bg="white">
            <StatusBar style="dark" />
            <View style={styles.container}>
                {/* <Image resizeMode='contain' 
                    style={styles.welcomImage}
                    source={require('@/assets/images/welcomImgLivery.webp')}

                /> */}
                {/*<LottiePlayer
                    // style={styles.welcomImage}
                    source={require('../assets/gif/congrats.json')} 
                    autoPlay loop 
                />*/}

                <View style={{gap: 20}}>
                    <Text style={styles.title}>Congratulation !</Text>
                </View>

                <View style={styles.footer}>
                    <Button
                        title="Track parcels"
                        buttonStyle={{marginHorizontal: wp(18)}}
                        onPress={() => navigation.navigate('')}
                    />
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Congrats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
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
        fontWeight: theme.fonts.bold
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

})