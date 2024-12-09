import React from "react";
import {Alert, AsyncStorage, BackHandler, Button, FlatList, Image, Modal, 
Picker,ssPlatform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {StackNavigator} from 'react-navigation'
import { useEffect, useState } from "react";

export default function Decisions(){

    const [participants, setParticipants] = useState(null)
    const [filteredRestaurants, setFilteredRestaurants] = useState(null)
    const [ chosenRestaurant, setChosenRestaurant] = useState({})

    


}
