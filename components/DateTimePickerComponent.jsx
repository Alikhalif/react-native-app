import React, { useState } from 'react';
import { View, Text, Button, Platform, Modal, StyleSheet, TouchableOpacity } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-modern-datepicker';
import { theme } from '../constants/Colors';

const DateTimePickerComponent = (
    {
        open, 
        startDate,
        selectedDate,
        onClose,
        onChangeStartDate,

    }) => {

    const [show, setShow] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(selectedDate);

    const handleDateChange = (date)=>{
        onChangeStartDate(date);
        setSelectedStartDate(date);
    }

    const handleOnPressStartDate= ()=>{
        onClose();
    }

    const modalVisible = open

    
    return (
        <Modal animationType='slide' transparent={true} visible={modalVisible}>
            <View style={styles.conteredView}>
                <View style={styles.modalView}>
                    <DatePicker
                        mode='calendar'
                        minimumDate={startDate}
                        selected={selectedStartDate}
                        onDateChange={handleDateChange}
                        onSelectedChange={(date)=> setSelectedStartDate(date)}
                        options={{
                            backgroundColor: theme.colors.primary,
                            textHeaderColor: "white",
                            textDefaultColor: "white",
                            selectedTextColor: theme.colors.primary,
                            mainColor: "white",
                            textSecondaryColor: "white",
                            borderColor: theme.colors.primary
                        }}
                    />
                    <TouchableOpacity onPress={handleOnPressStartDate}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        
        </Modal>
    );
};

export default DateTimePickerComponent;

const styles = StyleSheet.create({
    conteredView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView:{
        margin: 20,
        backgroundColor: theme.colors.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        padding: 25,
        width: "90%",
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
})
