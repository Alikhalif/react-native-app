import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import Button from '../../components/Button'
import Input from '../../components/input'
import { hp, wp } from '../../helpers/common'
import { theme } from '../../constants/Colors'
import { useRouter } from 'expo-router'
import ButtonBack from '../../components/ButtonBack'
import Icon from '../../assets/icons'
import ScreenClient from '../../components/ScreenClient'

const Profile = () => {

    const router = useRouter();
    const usernameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        if(!usernameRef.current || !phoneRef.current || !emailRef.current){
            Alert.alert('Sign Up', "please fill all the fields!")
            return;
        }
    }

    const handleChangeProfileImage = async () => {
        Alert.alert('Change Profile Picture', 'This feature will allow you to change your profile picture.');
        return;
        // You can integrate an image picker here for actual image change functionality
    }

    return (
        <ScreenClient bg="white">
            <ScrollView>
                <View style={styles.container}>
                {/* <ButtonBack router={router}/> */}

                    <View style={styles.cardImage}>
                        <Image
                            style={styles.profileImage}
                            contentFit="cover"
                            source={require("../../assets/images/profile.jpg")}
                        />

                        <TouchableOpacity style={styles.cameraIconContainer} onPress={handleChangeProfileImage}>
                            <Icon name="camera"  />
                        </TouchableOpacity>
                    </View>


                <Text style={{fontSize: hp(3), color: theme.colors.text}}>
                    Personal information
                </Text>
                <Text style={{fontSize: hp(2), color: theme.colors.text}}>
                    Details about your personal information 
                </Text>
                <View style={styles.form}>
                

                    <View style={{gap:10}}>
                        <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                        Username
                        </Text>
                        <Input
                        
                        placeholder='Enter your username'
                        onChabgeText={value=> usernameRef.current = value}
                        />
                    </View>

                    <View style={{gap:10}}>
                        <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                        Phone
                        </Text>
                        <Input
                        
                        placeholder='Enter your phone'
                        onChabgeText={value=> phoneRef.current = value}

                        />
                    </View>

                    <View style={{gap:10}}>
                        <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                        Email
                        </Text>
                        <Input
                            placeholder='Enter your email'
                            onChabgeText={value=> emailRef.current = value}
                        />
                    </View>

                    <Button title='Save Changes' loading={loading} onPress={onSubmit} />
                </View>

                

                

            </View>
            </ScrollView>
            
            
        </ScreenClient>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: wp(5)
    },
    cardImage:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        position: 'relative', // This is needed to position the camera icon

    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    cameraIconContainer:{
        position: 'absolute',
        bottom: 25,
        right: 100,
        // backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black background for the icon
        borderRadius: 50,
        padding: 8,
    },
    form:{
        gap:14,
        marginTop: 30,
    },
})