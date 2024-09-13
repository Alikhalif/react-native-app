import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import React, { useState } from 'react';
import PricingCard from '../../components/PricingCard ';

const Plan = () => {

    const [selectMonthly, setSelectMonthly] = useState(true);
    console.log(selectMonthly);
    return (
        <ScrollView contentContainerStyle={styles.PricingApp}>
            <View style={styles.appContainer}>
                {/* Header */}
                <View>
                <Text style={styles.headerTopic}>Our Pricing Plan</Text>
                <View style={styles.headerRow}>
                    <Text>Annually</Text>
                    <Switch
                    value={selectMonthly}
                    onValueChange={() => setSelectMonthly((prev) => !prev)}
                    />
                    <Text>Monthly</Text>
                </View>
                </View>
        
                {/* Cards */}
                <View style={styles.pricingCards}>
                <PricingCard
                    title="Essential"
                    price={selectMonthly ? "20.99" : "188.9"}
                    storage="60 GB Storage"
                    users="5"
                    sendUp="5"
                />
                <PricingCard
                    title="Deluxe"
                    price={selectMonthly ? "34.99" : "349.9"}
                    storage="70 GB Storage"
                    users="10"
                    sendUp="10"
                />
                <PricingCard
                    title="Premium"
                    price={selectMonthly ? "79.99" : "499.9"}
                    storage="90 GB Storage"
                    users="20"
                />
                </View>
            </View>
        </ScrollView>
    );
}
    


export default Plan;


const styles = StyleSheet.create({
    PricingApp: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    appContainer: {
      width: '90%',
    },
    headerTopic: {
      fontSize: 28,
      fontWeight: '700',
      textAlign: 'center',
      color: '#333',
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      gap: 20,
    },
    pricingCards: {
      marginTop: 40,
    },
});