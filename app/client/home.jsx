import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../../constants/Colors';
import Icon from '../../assets/icons';
import BottomSheetDelivery from '../../components/BottomSheetDelivery';
import DateTimePickerComponent from '../../components/DateTimePickerComponent';
import { getFormatedDate } from 'react-native-modern-datepicker';
import { Feather } from '@expo/vector-icons';
import { hp } from '../../helpers/common';
import ScreenWrapper from '../../components/ScreenWrapper';

const Home = () => {
    const [status, setStatus] = useState(false);
    const today = new Date();

    // const startDate = getFormatedDate(
    //     new Date(today.setDate(today.getDate()+1)),
    //     "YYYY/MM/DD"
    // );

    // Start Date Picker State
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const [startedDate, setStartDate] = useState("YYYY/MM/DD");

    // End Date Picker State
    const [openEndDatePicker, setOpenEndDatePicker] = useState(false);
    const [endDate, setEndDate] = useState("YYYY/MM/DD");

    const formattedStartDate = getFormatedDate( "YYYY/MM/DD");

    // Handler for opening start date picker
    const handleOnPressStartDate = () => {
        setOpenStartDatePicker(!openStartDatePicker);
    };

    // Handler for opening end date picker
    const handleOnPressEndDate = () => {
        setOpenEndDatePicker(!openEndDatePicker);
    };

    return (
        <>
        <ScreenWrapper bg={theme.colors.primary}>
        <View style={styles.container}>
            

            {/* Search and Date Inputs */}
            {/* Search and Date Inputs */}
            <View style={styles.searchCard}>

                <Text style={styles.titleSearchCard}>Find Deliveries</Text>

                <TextInput
                    placeholder="Search . . ."
                    style={styles.searchInput}
                />

                {/* Start Date Input */}
                <View style={styles.dateCard}>
                    <View style={styles.dateInputWrapper}>
                        <TouchableOpacity onPress={handleOnPressStartDate} style={styles.inputDate}>
                            <Text style={{color: 'gray'}}>{startedDate}</Text>
                            <Feather name="calendar" size={24} color="#BDBDBD" />
                        </TouchableOpacity>
                        <DateTimePickerComponent
                            open={openStartDatePicker}
                            startDate={formattedStartDate}
                            selectedDate={startedDate}
                            onClose={() => setOpenStartDatePicker(false)}
                            onChangeStartDate={(date) => setStartDate(date)}
                        />
                    </View>

                    {/* End Date Input */}
                    <View style={styles.dateInputWrapper}>
                        <TouchableOpacity onPress={handleOnPressEndDate} style={styles.inputDate}>
                            <Text style={{color: 'gray'}}>{endDate}</Text>
                            <Feather name="calendar" size={24} color="#BDBDBD" />
                        </TouchableOpacity>
                        <DateTimePickerComponent
                            open={openEndDatePicker}
                            startDate={formattedStartDate}
                            selectedDate={endDate}
                            onClose={() => setOpenEndDatePicker(false)}
                            onChangeStartDate={(date) => setEndDate(date)}
                        />
                    </View>
                </View>
            </View>

            <View style={{padding: 15}}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Delivery Note</Text>
                    <TouchableOpacity 
                        onPress={() => setStatus(true)}
                        style={styles.addButton} 
                    >
                        <Icon name="plus" size={16} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Employee Cards */}
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.nbrOrder}>123456</Text>
                        <Text style={styles.date}>16/09/2024</Text>
                    </View>
                    <Text style={styles.username}>@abdelalikhalif</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.nbrOrder}>654321</Text>
                        <Text style={styles.date}>17/09/2024</Text>
                    </View>
                    <Text style={styles.username}>@johndoe</Text>
                </View>
            </View>

            
        </View>

        {/* BottomSheetModal */}
        {status && <BottomSheetDelivery title="Create Delivery" setStatus={setStatus} />}
        </ScreenWrapper>
        </>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 15,
        backgroundColor: '#f8f9fa',
    },
    titleSearchCard:{
        fontSize: hp(3),
        fontWeight: theme.fonts.bold,
        color: 'white',
        marginBottom: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'semibold',
        color: theme.colors.text,
    },
    addButton: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        borderRadius: 30,
        elevation: 6,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
    },
    searchCard: {
        width: '100%',
        marginBottom: 5,
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
        borderBottomEndRadius: theme.radius.xxl,
        borderBottomStartRadius: theme.radius.xxl,
        padding: 10,
        // elevation: 3,
        // shadowColor: '#000',
        // shadowOpacity: 0.05,
        // shadowOffset: { width: 0, height: 2 },
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        height: 45,
        paddingLeft: 10,
        fontSize: 16,
        marginBottom: 20,
        color: 'white'
    },
    dateCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    dateInputWrapper: {
        width: '48%',
    },
    inputDate: {
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#E0E0E0",
        height: 50,
        paddingLeft: 10,
        backgroundColor: "#FAFAFA",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        marginVertical: 8,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    nbrOrder: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 12,
        color: '#888',
    },
    username: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
});