import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Home Page</Text>

      <TouchableOpacity style={styles.IconNames} onPress={() => navigation.navigate('Restaurant')}>
        <Text> Restaurants </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.IconNames} onPress={() => navigation.navigate('People')}>
        <Text> People </Text>
      </TouchableOpacity>
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
  IconNames:{
    fontSize: 500,
    paddingTop: 20,
    color: ''


  }
});
