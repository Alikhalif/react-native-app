import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PricingCard = ({ title, price, nbrEmployee, nbrClient, delivery }) => {
    return (
        <View style={styles.PricingCard}>
        <View>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardPrice}>${price}</Text>
        </View>
        {/* Features */}
        <View style={styles.cardFeatures}>
            <Text>{nbrEmployee}</Text>
            <Text>{nbrClient} users in total</Text>
            {delivery && <Text>Send up to {delivery}</Text>}
        </View>
        <Button title="READ MORE" onPress={() => {}} />
        </View>
    );
};

export default PricingCard;

const styles = StyleSheet.create({
  PricingCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    width: '100%',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  cardPrice: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cardFeatures: {
    marginTop: 20,
    marginBottom: 20,
  },
});
