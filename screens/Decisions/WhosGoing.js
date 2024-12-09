import React, { useState } from "react";
import { Alert,BackHandler, Button, FlatList, Image,Modal, 
Picker, ssPlatform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';

export default function WhosGoing (){
    const [people, setPeople] = useState([])
    const[ selected, setSelected] = useState({})
    const [participants, setParticipants] = useState([])

    const toggleSelected = (key) =>{
        setSelected ((prevSelected) => ({
            ...prevSelected, 
            [key]:!prevSelected[key]
        })) 
    }
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Who's Going?</Text>
            {people.length === 0 ? (
                    <Text>No one to display!</Text>
                ) : (
                    <FlatList
                        data={people}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.listItem}
                                onPress={() => toggleSelected(item.key)}
                            >
                                <CheckBox
                                    value={selected[item.key] || false}
                                    onValueChange={() => toggleSelected(item.key)}
                                />
                                <Text style={styles.nameText}>
                                    {item.name} {item.nickName} ({item.rating})
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    nameText: {
        marginLeft: 8,
        fontSize: 16,
    },
});