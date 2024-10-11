import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Home Page</Text>
      <Button title="Restaurants" onPress={() => navigation.navigate('Restaurant')}
      />
      <Button title="People" onPress={() => navigation.navigate('People')}
      />
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
