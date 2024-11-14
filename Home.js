import React from "react";
import { Alert,BackHandler, Button, FlatList, Image,Modal, 
Picker, ssPlatform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

let users = null
let filteredRestaurants = null
let chosenRestaurant = {}

const getRandom = (inMin, inMax) => {
    inMin = Math.ceil(inMin)
    inMax = Math.floor(inMax)
    return Math.floor(Math.random() * (inMax - inMin + 1)) + inMin
}

export default function Home ({navigation}) {
    return(
        <View style={styles.decisionTimeContainer}>
            <TouchableOpacity  style={styles.decisionTimeTouchableContainer}
            onPress={async () =>{
              try{
                let inPeople = await AsyncStorage.getItem('people')
                inPeople = JSON.parse(inPeople)

                if(inPeople,length === 0){
                  Alert.alert(
                    "There nothing here bro. Try adding something first",
                    [{text:"OK"}],{cancelable:false})
                    return;
                }
                
                let inRestaurants = await AsyncStorage.getItem('restaurants')
                inRestaurants = JSON.parse(inRestaurants)

                if(inRestaurants.length === 0){
                  Alert.alert(
                    "Theres nothing here. Try adding something",
                    [{text:"OK"}],{cancelable:false})
                    return;
                }

                navigation.navigate("WhosGoing")

              }catch(error){
                console.log(error)
              }
            }}
            >
               
                <Text style={{'paddingTop':20}}>
                    Click to get Started
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  decisionTimeContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  decisionTimeTouchableContainer:{
    alignItems:'center',
    justifyContent:'center'
  }
})
