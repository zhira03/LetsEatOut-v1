import { StyleSheet, Text, View } from 'react-native'
import {FlatList,ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react'

const Restaurants = () => {
  const places = [
    {
        "name": "La Fontaine",
        "location": "Meikles Hotel, City Centre",
        "best_dish": "Zimbabwean organic steak",
        "best_drink": "Fine wines"
    },
    {
        "name": "Alo Alo",
        "location": "Arundel Shopping Centre",
        "best_dish": "Prawn curry",
        "best_drink": "House cocktails"
    },
    {
        "name": "Victoria 22",
        "location": "22 Victoria Road",
        "best_dish": "Italian pasta",
        "best_drink": "Signature cocktails"
    },
    {
        "name": "Amanzi",
        "location": "Northern Suburbs",
        "best_dish": "Grilled tilapia",
        "best_drink": "South African wines"
    },
    {
        "name": "The Butchers Kitchen",
        "location": "Sam Levy’s Village, Borrowdale",
        "best_dish": "Prime steak cuts",
        "best_drink": "Craft beers"
    },
    {
        "name": "Shangri-La Chinese Restaurant",
        "location": "Newlands",
        "best_dish": "Sushi platter",
        "best_drink": "Green tea"
    },
    {
        "name": "Millers Café",
        "location": "Borrowdale Village",
        "best_dish": "Gourmet burger",
        "best_drink": "Signature coffee"
    },
    {
        "name": "Kombahari",
        "location": "Rainbow Towers Hotel",
        "best_dish": "Afro-Asian dumplings",
        "best_drink": "Local Zimbabwean beer"
    },
    {
        "name": "The Goose",
        "location": "Wild Geese Lodge, Teviotdale",
        "best_dish": "Roasted lamb",
        "best_drink": "Gin cocktails"
    }
]
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.Restaurantheading}>
          Restaurants
        </Text>
        <FlatList
            data={places}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={{ margin: 10, padding: 10, borderBottomWidth: 1 }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                    <Text>Location: {item.location}</Text>
                    <Text>Best Dish: {item.best_dish}</Text>
                    <Text>Best Drink: {item.best_drink}</Text>
                </View>
            )}
        />
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>

  )
}

export default Restaurants

const styles = StyleSheet.create({
  Restaurantheading:{
    fontSize:40,
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    paddingBottom:20,
    textAlign:'center'
  }
})