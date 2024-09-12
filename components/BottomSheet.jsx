import { View, Text, StyleSheet, Alert, ScrollView, Pressable } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { hp } from '../helpers/common';
import { theme } from '../constants/Colors';
import Input from './input';
import Button from './Button';
import { Animated } from 'react-native';

const BottomSheet = ({ title, setStatus }) => {

    const usernameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);  // Corrected to passwordRef
    const [loading, setLoading] = useState(false);

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

    const onSubmit = async () => {
        if (!usernameRef.current || !phoneRef.current || !emailRef.current) {
            Alert.alert('Create Employee', "Please fill all the fields!");
            return;
        }
        // Handle form submission logic here
    };

    return (
        <Pressable style={styles.backdrop} onPress={closedModal}>
            <Pressable onPress={() => {}} style={{ height: '75%', width: '100%' }}>
                <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: Slide }]}]}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{title}</Text>

                    <ScrollView>
                        <View style={styles.form}>
                            <View style={{ gap: 10 }}>
                                <Text style={{ fontSize: hp(1.7), color: theme.colors.text }}>
                                    Username
                                </Text>
                                <Input
                                    placeholder="Enter your username"
                                    onChangeText={value => usernameRef.current = value}
                                />
                            </View>

                            <View style={{ gap: 10 }}>
                                <Text style={{ fontSize: hp(1.7), color: theme.colors.text }}>
                                    Phone
                                </Text>
                                <Input
                                    placeholder="Enter your phone"
                                    onChangeText={value => phoneRef.current = value}
                                />
                            </View>

                            <View style={{ gap: 10 }}>
                                <Text style={{ fontSize: hp(1.7), color: theme.colors.text }}>
                                    Email
                                </Text>
                                <Input
                                    placeholder="Enter your email"
                                    onChangeText={value => emailRef.current = value}
                                />
                            </View>

                            <View style={{ gap: 10 }}>
                                <Text style={{ fontSize: hp(1.7), color: theme.colors.text }}>
                                    Password
                                </Text>
                                <Input
                                    placeholder="Enter your password"
                                    secureTextEntry
                                    onChangeText={value => passwordRef.current = value}  // Use corrected reference name
                                />
                            </View>

                            <View style={styles.buttons}>
                                <Button buttonStyle={{ width: 100 }} title="Save" loading={loading} onPress={onSubmit} />
                                <Button buttonStyle={{ width: 100, backgroundColor: theme.colors.gray }} textStyle={{ color: theme.colors.text }} title="Close" loading={loading} onPress={closedModal} />
                            </View>
                        </View>
                    </ScrollView>
                </Animated.View>
            </Pressable>
        </Pressable>
    );
};

export default BottomSheet;

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
});
