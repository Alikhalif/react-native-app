import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import React, { useState } from 'react';
import PricingCard from '../../components/PricingCard ';
import ButtonBack from '../../components/ButtonBack';
import { router } from 'expo-router';
import { hp, wp } from '../../helpers/common';
import ScreenWrapper from '../../components/ScreenWrapper';
import HeaderBar from '../../components/HeaderBar';

const Plan = () => {

    const [selectMonthly, setSelectMonthly] = useState(true);
    console.log(selectMonthly);
    return (
        
        
        <ScreenWrapper bg='white'>
          <HeaderBar title="Plan" router={router} />
          <View style={styles.appContainer}>
            {/* <ButtonBack router={router}/> */}
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
        
              <ScrollView>
                {/* Cards */}
                <View style={styles.pricingCards}>
                  <PricingCard
                      title="Essential"
                      price={selectMonthly ? "20.99" : "188.9"}
                      nbrEmployee="60 GB Storage"
                      nbrClient="5"
                      delivery="5"
                  />
                  <PricingCard
                      title="Deluxe"
                      price={selectMonthly ? "34.99" : "349.9"}
                      nbrEmployee="70 GB Storage"
                      nbrClient="10"
                      delivery="10"
                  />
                  <PricingCard
                      title="Premium"
                      price={selectMonthly ? "79.99" : "499.9"}
                      nbrEmployee="90 GB Storage"
                      nbrClient="20"
                      delivery="20"
                  />
                </View>
              </ScrollView>    
          </View>
        </ScreenWrapper>
    );
}
    


export default Plan;


const styles = StyleSheet.create({
    PricingApp: {
      
    },
    appContainer: {
      flex: 1,
      // gap: 45,
      paddingHorizontal: wp(5),
      paddingVertical: hp(2),
        backgroundColor: '#fff',
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