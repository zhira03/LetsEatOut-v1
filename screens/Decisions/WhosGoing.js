import React, { useState } from "react";
import { Alert,BackHandler, Button, FlatList, Image,Modal, 
Picker, ssPlatform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WhosGoing (){
    const [people, setPeople] = useState([])
    const[ selected, setSelected] = useState({})

    return(
        <View>
            <Text>
                Who's Going?
            </Text>
            <FlatList>
                
            </FlatList>
        </View>
    )
}