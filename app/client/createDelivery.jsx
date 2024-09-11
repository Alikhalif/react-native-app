import { View, Text, StyleSheet, Image, Pressable, ScrollView, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import ScreenWrapper from '../../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../../helpers/common'
import { theme } from '../../constants/Colors'
import Button from '../../components/Button'
import { router, useRouter } from 'expo-router'
import ButtonBack from '../../components/ButtonBack'
import Input from '../../components/input'
import ScreenClient from '../../components/ScreenClient'

const CreateDelivery = () => {
    const router = useRouter();

    const usernameRef = useRef();
    const phoneRef = useRef();
    const cityRef = useRef();
    const adressRef = useRef();
    const priceRef = useRef();
    const deliveryPriceRef = useRef();
    const paymentMethodRef = useRef();
    const commandNumberRef = useRef();
    const packageRef = useRef();
    const clientRef = useRef();
    const commentRef = useRef();

    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        if(!usernameRef.current || !phoneRef.current || !emailRef.current){
            Alert.alert('Create', "please fill all the fields!")
            return;
        }
    }

    const close = () =>{
        return;
    }

    return (
        <ScreenClient bg="white">
            <View style={styles.container}>
                {/* <ButtonBack router={router}/> */}

                <ScrollView>
                    <View style={styles.form}>
                    

                    <View style={{gap:10}}>
                        <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                        Name
                        </Text>
                        <Input
                        
                        placeholder='Enter your name'
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
                        City
                        </Text>
                        <Input
                            placeholder='Enter your city'
                            onChabgeText={value=> cityRef.current = value}
                        />
                    </View>

                    <View style={{gap:10}}>
                        <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                        Adress
                        </Text>
                        <Input
                            placeholder='Enter your adress'
                            onChabgeText={value=> adressRef.current = value}
                        />
                    </View>

                    <View style={{gap:10}}>
                        <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                        Price
                        </Text>
                        <Input
                            placeholder='Enter your price'
                            onChabgeText={value=> priceRef.current = value}
                        />
                    </View>

                    <View style={{gap:10}}>
                        <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                        Delivery price
                        </Text>
                        <Input
                            placeholder='Enter your delivery price'
                            onChabgeText={value=> deliveryPriceRef.current = value}
                        />
                    </View>

                    <View style={{gap:10}}>
                        <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                        Payment method
                        </Text>
                        <Input
                            placeholder='Select payment method'
                            onChabgeText={value=> paymentMethodRef.current = value}
                        />
                    </View>

                    <View style={{gap:10}}>
                        <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                        Command Number
                        </Text>
                        <Input
                            placeholder='Enter your command number'
                            onChabgeText={value=> commandNumberRef.current = value}
                        />
                    </View>

                    <View style={{gap:10}}>
                        <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                        Open the package
                        </Text>
                        <Input
                            placeholder='Enter your open the package'
                            onChabgeText={value=> packageRef.current = value}
                        />
                    </View>

                    <View style={{gap:10}}>
                        <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                        Client
                        </Text>
                        <Input
                            placeholder='Select client'
                            onChabgeText={value=> clientRef.current = value}
                        />
                    </View>

                    <View style={{gap:10}}>
                        <Text style={{fontSize: hp(1.7), color: theme.colors.text}}>
                        Comment
                        </Text>
                        <TextInput 
                            style={styles.textArea}
                            // value={text}
                            onChangeText={commentRef}
                            placeholder="Enter your commant here..."
                            multiline={true}
                            numberOfLines={4} 
                        />
                    </View>

                    

                    <View style={styles.buttons}>
                        <Button buttonStyle={{width:100}} title='Save' loading={loading} onPress={onSubmit} />
                        <Button buttonStyle={{width:100, backgroundColor: theme.colors.gray}} textStyle={{color:theme.colors.text}} title='Close' loading={loading} onPress={close} />
                    </View>
                    
                </View>
                </ScrollView>

                    
            </View>
        </ScreenClient>
    )
}

export default CreateDelivery;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: wp(5),
        paddingBottom: 10,
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
    textArea:{
        height: 150, 
        justifyContent: "flex-start",
        textAlignVertical: 'top', 
        borderColor: theme.colors.text,
        borderRadius: theme.radius.xxl,
        borderWidth: 1,
        padding: 10,
    },
    buttons:{
        flexDirection: "row-reverse",
        gap: 10,
    }
})