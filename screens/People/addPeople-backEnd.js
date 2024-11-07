import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const AddPeople= ({text}) => {
    return(
        <View style = {styles.itemsDone}>
            <View style={styles.itemsLeft}>

                <TouchableOpacity style={styles.square}>
                    <Text> X </Text>
                </TouchableOpacity>
                <Text style={styles.itemText}>{text}</Text>

            </View>

            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemsDone:{
        width:'95%',
        backgroundColor:'#f0f0f0',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
        /*marginTop:5,*/

    },

    itemsLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
        
    },

    square:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
        alignItems:'center',
        justifyContent:"center"
    },

    itemText:{
        maxWidth:'80%',
    },

    circular:{
        width:12,
        height:12,
        borderWidth:2,
        borderRadius:5,
        borderColor:'#55BCF6'
    },
    
});

export default AddPeople;