import { Picker } from "@react-native-picker/picker";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Restaurants from "./Restaurant";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AddRestaurants extends React.Component{
    constructor (inProps){
        super(inProps)
        this.state = {
            name :'', bestMeal:'',price:'', rating:'',
            key:`r_${new Date().getTime()}` 
        }
    };

    handleSave = () =>{
        AsyncStorage.getItem('restaurants', (error, restaurants) => {
                let updatedRestaurants = [];
                if (restaurants) {
                    updatedRestaurants = JSON.parse(restaurants);
                }
                updatedRestaurants.push(this.state);
                AsyncStorage.setItem('restaurants', JSON.stringify(updatedRestaurants), () => {
                    this.props.navigation.navigate("Restaurants");
                });
            }
        );
    }
    render(){
        return (
            <ScrollView style = {styles.addScreenContainer}>
                <View style={styles.addScreenInnerContainer}>

                    <View style={styles.addScreenFormContainer}>
                        <TextInput label={'name'} maxLength={20} placeholder="name"/>

                        <Text style={styles.fieldLabel}>Best Meal</Text>
                        <View style={styles.pickerContainer}>
                            <Picker style={styles.picker} prompt="Best Meal" selectedValue={this.state.bestMeal} onValueChange = {(inItemValue) => this.setState({bestMeal: inItemValue})}>
                                <Picker.Item label="" value={''}/>
                                <Picker.Item label="Zim" value={'Zim'}/>
                                <Picker.Item label="South Africa" value={'SA'}/>
                                <Picker.Item label="Other" value={'Other'}/>
                            </Picker>
                        </View>

                        <Text style={styles.fieldLabel}>Price</Text>
                        <View style={styles.pickerContainer}>
                            <Picker style={styles.picker} prompt="Price" selectedValue={this.state.price} onValueChange = {(inItemValue) => this.setState({price: inItemValue})}>
                                <Picker.Item label="" value="" />
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                            </Picker>
                        </View>
                        
                        <Text style={styles.fieldLabel}>Rating</Text>
                        <View style={styles.pickerContainer}>
                            <Picker style={styles.picker} selectedValue={this.state.rating}
                            prompt="Rating"
                            onValueChange={ (inItemValue) => this.setState({ rating : 
                            inItemValue }) }>
                                <Picker.Item label="" value="" />
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                            </Picker>
                        </View>

                        <View style={styles.addScreenButtonsContainer}>
                            <Button title='Cancel' onPress={() => navigation.navigate('Restaurants')}/>
                            <Button title="Save" onPress={this.handleSave}/>
                        </View>
                    </View>
                    
                </View>
            </ScrollView>
        )
    }
}
export default AddRestaurants;

const styles = StyleSheet.create({
    addScreenContainer:{
        
    },
    addScreenButtonsContainer:{
        flexDirection:'row',
        justifyContent:'center'
    }
})