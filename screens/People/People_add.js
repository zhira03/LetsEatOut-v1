import { StyleSheet, Text, View,Platform, Button,Keyboard, KeyboardAvoidingView, TextInput, TouchableOpacity, } from 'react-native'
import {FlatList,ScrollView, StatusBar} from 'react-native';
import React,{useState, useEffect} from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import AddPeople from './addPeople-backEnd'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'


const People_add = ({ navigation }) => {
  const [add_people, setAddPeople] = useState('');
  const [peopleAdd, setPeopleAdd] = useState([]);

  // Fetch stored people on component mount
  useEffect(() => {
    const loadPeople = async () => {
      try {
        const storedPeople = await AsyncStorage.getItem('peopleList');
        if (storedPeople) {
          setPeopleAdd(JSON.parse(storedPeople));
        }
      } catch (error) {
        console.error("Failed to load people list:", error);
      }
    };

    loadPeople();
  }, []);

  const fetchPeople = async (name) => {
    try {
      const newUser = { name };
      const response = await axios.post('http://localhost:27017/api/users', newUser);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePeople = async () => {
    Keyboard.dismiss();
    if (add_people.trim()) {
      const newPeopleList = [...peopleAdd, add_people.trim()];
      setPeopleAdd(newPeopleList);
      await AsyncStorage.setItem('peopleList', JSON.stringify(newPeopleList)); // Save to AsyncStorage
      fetchPeople(add_people.trim());
      setAddPeople(''); // Clear input
    }
  };

  const completeAdd = async (index) => {
    const newPeopleList = [...peopleAdd];
    newPeopleList.splice(index, 1);
    setPeopleAdd(newPeopleList);
    await AsyncStorage.setItem('peopleList', JSON.stringify(newPeopleList)); // Update AsyncStorage
  };

  return (
    <View style={styles.container}>
      <View style={styles.greetingsContainer}>
        <Text style={styles.greetings}>Let's Add Some People</Text>

        <View style={styles.addingPeople}>
          {peopleAdd.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => completeAdd(index)}>
              <AddPeople text={item} />
            </TouchableOpacity>
          ))}
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <View style={styles.takeNameButton}>
            <TextInput
              style={styles.takeName}
              placeholder="Enter a Name"
              value={add_people}
              onChangeText={text => setAddPeople(text)}
            />
            <TouchableOpacity onPress={handlePeople}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>Add</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};
export default People_add

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'pink'
  },
  greetings:{
    fontSize:24,
    fontWeight:'bold',
  },
  greetingsContainer:{
    justifyContent:'center',
    alignItems:"center",
    marginTop:20,
  },
  addingPeople:{
    marginTop:30,
  },
  takeNameButton:{
    bottom: 20, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  takeName:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: '80%',
  },
  keyboardView:{
    marginTop:10,
  },
  addWrapper:{
    width:60,
    height:60,
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#E8EAED",
    borderWidth:1,
    },
    home_restaurants:{
    position: 'absolute',
    bottom: 25, 
    left: 20,   
    right: 20,
    flexDirection: 'row',  
    justifyContent: 'space-between',  
    marginBottom:25,
    },
    home:{
      height:50,
      borderWidth:1
    }
  });