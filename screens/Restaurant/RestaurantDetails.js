import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantDetails = ({ route }) => {
  const { name, bestMeal, price, rating } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text>Best Meal: {bestMeal}</Text>
      <Text>Price: {price}</Text>
      <Text>Rating: {rating}</Text>
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
