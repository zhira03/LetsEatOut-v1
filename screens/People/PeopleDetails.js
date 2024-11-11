import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PeopleDetails = ({ route }) => {
  const { name, favMeal, nickName, rating } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text>Best Meal: {favMeal}</Text>
      <Text>Nick-Name: {nickName}</Text>
      <Text>Rating: {rating}</Text>
    </View>
  );
};

export default PeopleDetails;

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
