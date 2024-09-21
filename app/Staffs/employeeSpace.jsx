import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { theme } from '../../constants/Colors';
import Icon from '../../assets/icons';
import BottomSheet from '../../components/BottomSheet';
import ScreenWrapper from '../../components/ScreenWrapper';
import ButtonBack from '../../components/ButtonBack';
import { router } from 'expo-router';
import { wp } from '../../helpers/common';
import HeaderBar from '../../components/HeaderBar';


const EmployeeSpace = () => {

    const [status, setStatus] = useState(false);

    return (
            // <View>
                <ScreenWrapper bg='white'>
                    <HeaderBar title="Employee Space" router={router} />
                    <View style={styles.container}>
                        {/* <ButtonBack router={router}/> */}
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>List Employees</Text>
                            <TouchableOpacity 
                                onPress={() => setStatus(true)}
                                style={styles.addButton} 
                            >
                                <Icon name="plus" size={16} color="white" />
                            </TouchableOpacity>
                        </View>

                        {/* Employee Card Example */}
                        <View style={styles.card}>
                            <Image style={styles.profileImage} source={require('../../assets/images/profile.jpg')} />
                            <View>
                                <Text style={styles.text}>Abdelali Khalif</Text>
                                <Text style={styles.username}>@abdelalikhalif</Text>
                            </View>
                        </View>
                    </View>
                    

                    {/* BottomSheetModal */}
                    
                    { status && <BottomSheet title="Create Employee" setStatus={setStatus}/>}
                
                </ScreenWrapper>

    );
};

export default EmployeeSpace;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp(5),
        backgroundColor: '#fff',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.text,
    },
    addButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        borderRadius: 25,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 15,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        marginVertical: 5,
        elevation: 5,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.text,
    },
    username: {
        fontSize: 15,
        color: 'gray',
        fontWeight: 'bold',
    },
});
