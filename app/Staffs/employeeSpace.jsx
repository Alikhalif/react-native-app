import { View, Text, StyleSheet, FlatList, Image, Button, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
// import { ListItem } from 'react-native-elements';
import { theme } from '../../constants/Colors';
import Icon from '../../assets/icons';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';


const EmployeeSpace = () => {
    const modalRef = useRef<BottomSheetModal>(null)
    
    return (
        // Bottom Sheet
        <BottomSheetModalProvider>

            <View style={styles.container}>
                {/* Title and Add Button */}
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>List Employees</Text>
                    <TouchableOpacity 
                        onPress={() => { modalRef.current?.present()}}
                        style={styles.addButton}
                    >
                        <Icon name="plus" size={16} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Image 
                        style={styles.profileImage}
                        source={require('../../assets/images/profile.jpg')}
                    />
                    <View>
                        <Text style={styles.text}>Abdelali Khalif</Text>
                        <Text style={styles.username}>@abdelalikhalif</Text>
                    </View>
                    
                </View>

                {/* /// */}
                <View style={styles.card}>
                    <Image 
                        style={styles.profileImage}
                        source={require('../../assets/images/profile.jpg')}
                    />
                    <View>
                        <Text style={styles.text}>Abdelali Khalif</Text>
                        <Text style={styles.username}>@abdelalikhalif</Text>
                    </View>
                    
                </View>
                <View style={styles.card}>
                    <Image 
                        style={styles.profileImage}
                        source={require('../../assets/images/profile.jpg')}
                    />
                    <View>
                        <Text style={styles.text}>Abdelali Khalif</Text>
                        <Text style={styles.username}>@abdelalikhalif</Text>
                    </View>
                    
                </View>
            </View>


            <BottomSheetModal ref={modalRef}>

            </BottomSheetModal>

        </BottomSheetModalProvider>
        
    )
}

export default EmployeeSpace;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5, // Add padding inside the card
        margin:5,
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
        borderRadius: 30, // Fully rounded button
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    profileImage: {
        width: 70,
        height: 70,
        margin: 5,
        borderRadius: 35, // Fully rounded profile image
        marginRight: 15, // Space between the image and text
    },
    card:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white', // Use primary theme color
        borderRadius: 15, // Softer border radius for the card
        padding: 5, // Add padding inside the card
        margin:5,
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5, // Elevation for Android
        

    },
    text:{
        margin: 5,
        // color: 'white',
        fontSize: 20,
        color: theme.colors.text, // White text to contrast with the primary background
        fontWeight: 'bold'
    },
    username:{
        marginLeft:5,
        fontSize: 15,
        color: 'gray', 
        fontWeight: 'bold'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    }
});