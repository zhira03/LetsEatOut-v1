import React, { useState } from "react";
import { Alert,BackHandler, Button, FlatList, Image,Modal, 
Picker, ssPlatform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';

export default function WhosGoing (){
    const [people, setPeople] = useState([])
    const[ selected, setSelected] = useState({})

    const toggleSelected = (key) =>{
        setSelected ((prevSelected) => ({
            ...prevSelected, 
            [key]:!prevSelected[key]
        })) 
    }
    return(
        <View>
            <Text>
                Who's Going?
            </Text>
            <FlatList 
                data={people} 
                keyExtractor={(item) => item.key}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=> toggleSelected(item.key)}>
                        <CheckBox 
                            value={selected[item.key] || false}
                            onValueChange={() => toggleSelected(item.key)}
                        />
                        <Text>
                            {item.firstName} {item.lastName} {item.relationship}
                        </Text>
                    </TouchableOpacity>
                )}>
            </FlatList>
        </View>
    )
}