import { Picker } from "@react-native-picker/picker";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rating from '/Users/HomePC/Desktop/react/Silly2/Foods/LetsEatOut/componets/rating'

class People_add extends React.Component {
    constructor(inProps) {
        super(inProps);
        this.state = {
            name: '',
            favMeal: '',
            nickName: '',
            rating: '',
            key: `r_${new Date().getTime()}`
        };
    }

    handleSave = () => {
        AsyncStorage.getItem('people', (error, people) => {
            let updatedPeople = [];
            if (people) {
                updatedPeople = JSON.parse(people);
            }
            updatedPeople.push(this.state);
            AsyncStorage.setItem('people', JSON.stringify(updatedPeople), () => {
                this.props.navigation.navigate("People");
            });
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.addScreenContainer}>
                    <View style={styles.addScreenInnerContainer}>

                        <View style={styles.addScreenFormContainer}>
                            <TextInput
                                label="Name"
                                value={this.state.name}
                                maxLength={20}
                                placeholder="Enter Person name"
                                onChangeText={(text) => this.setState({ name: text })}
                                style={styles.textInput}
                            />

                            <View style={styles.largePickerDiv}>
                                <Text style={styles.fieldLabel}>Favorite Meal</Text>
                                <View style={styles.pickerContainer}>
                                    <Picker
                                        style={styles.picker}
                                        prompt="Fav Meal"
                                        selectedValue={this.state.favMeal}
                                        onValueChange={(inItemValue) => this.setState({ favMeal: inItemValue })}
                                    >
                                        <Picker.Item label="" value="" />
                                        <Picker.Item label="Zim" value="Zim" />
                                        <Picker.Item label="South Africa" value="SA" />
                                        <Picker.Item label="Other" value="Other" />
                                    </Picker>
                                </View>

                                <Text style={styles.fieldLabel}>Nick-Name</Text>
                                <View style={styles.pickerContainer}>
                                    <Picker
                                        style={styles.picker}
                                        prompt="Nick-Name"
                                        selectedValue={this.state.nickName}
                                        onValueChange={(inItemValue) => this.setState({ nickName: inItemValue })}
                                    >   
                                        <Picker.Item label="" value="" />                                     
                                        <Picker.Item label="Ass" value="1" />
                                        <Picker.Item label="Butt" value="2" />
                                        <Picker.Item label="Ugly" value="3" />
                                        <Picker.Item label="CashLips" value="4" />
                                        <Picker.Item label="BrokeBoys" value="5" />
                                    </Picker>
                                </View>
                                
                                <Text style={styles.fieldLabel}>Rating</Text>
                                <View style={styles.pickerContainer}>
                                    <Picker
                                        style={styles.picker}
                                        selectedValue={this.state.rating}
                                        prompt="Rating"
                                        onValueChange={(inItemValue) => this.setState({ rating: inItemValue })}
                                    >
                                        <Picker.Item label="" value="" />
                                        <Picker.Item label="*" value="*" />
                                        <Picker.Item label="**" value="**" />
                                        <Picker.Item label="***" value="***" />
                                        <Picker.Item label="****" value="****" />
                                        <Picker.Item label="*****" value={rating} />
                                    </Picker>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.addScreenButtonsContainer}>
                    <Button mode="outlined" onPress={() => this.props.navigation.navigate('People')} style={styles.button}>
                        Cancel
                    </Button>
                    <Button mode="contained" onPress={this.handleSave} style={styles.button}>
                        Save
                    </Button>
                </View>
            </View>
        );
    }
}

export default People_add;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    addScreenContainer: {
        flex: 1,
        padding: 16,
    },
    addScreenInnerContainer: {
        flex: 1,
    },
    addScreenFormContainer: {
        marginBottom: 20,
    },
    fieldLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    pickerContainer: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ddd',
        marginBottom: 16,
    },
    picker: {
        width: '100%',
        height: 40,
    },
    addScreenButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    textInput: {
        marginBottom: 16,
    },
    button: {
        flex: 1,
        marginHorizontal: 8,
    },
});
