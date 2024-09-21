import { View, Text, StyleSheet, Alert, ScrollView, Pressable, TextInput } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { hp } from '../helpers/common';
import { theme } from '../constants/Colors';
import Input from './input';
import Button from './Button';
import { Animated } from 'react-native';
import { useRouter } from 'expo-router';

const BottomSheetDelivery = ({ title, setStatus }) => {


    const router = useRouter();

    const usernameRef = useRef(null);
    const phoneRef = useRef(null);
    const cityRef = useRef(null);
    const adressRef = useRef(null);
    const priceRef = useRef(null);
    const deliveryPriceRef = useRef(null);
    const paymentMethodRef = useRef(null);
    const commandNumberRef = useRef(null);
    const packageRef = useRef(null);
    const clientRef = useRef(null);
    const commentRef = useRef(null);

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

    const Slide = useRef(new Animated.Value(300)).current;

    const slideUp = () => {
        Animated.timing(Slide, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
        }).start();
    };

    const slideDown = () => {
        Animated.timing(Slide, {
            toValue: 300,
            duration: 800,
            useNativeDriver: true,
        }).start();
    };

    const closedModal = () => {
        slideDown();
        setStatus(false);
    };

    useEffect(() => {
        slideUp();
    }, []);

    // const onSubmit = async () => {
    //     if (!usernameRef.current || !phoneRef.current || !emailRef.current) {
    //         Alert.alert('Create Employee', "Please fill all the fields!");
    //         return;
    //     }
    //     // Handle form submission logic here
    // };

    return (
        
        <Pressable style={styles.backdrop} onPress={closedModal}>
            <Pressable onPress={() => {}} style={{ height: '85%', width: '100%' }}>
                
                    <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: Slide }]}]}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{title}</Text>

                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={styles.container}>
                        {/* <ButtonBack router={router}/> */}
                            <View style={styles.form}>
                                <Text style={styles.titleText}>Create New Delivery</Text>

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
                                        onChangeText={value=> commentRef.current = value}
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

                                
                        </View> 
                        </ScrollView>
                    </Animated.View>
                
            </Pressable>
        </Pressable>
        
    );
}

export default BottomSheetDelivery;

const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    bottomSheet: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    form: {
        gap: 14,
        marginTop: 30,
    },
    buttons: {
        flexDirection: "row-reverse",
        gap: 10,
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
});