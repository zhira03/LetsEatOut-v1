import { StyleSheet, Text, View,Platform, Button,Keyboard, KeyboardAvoidingView, TextInput, TouchableOpacity, } from 'react-native'
import React,{useState} from 'react'
import AddPeople from './addPeople-backEnd'


const People_add = ({navigation}) => {
    const [add_people, setAddPeople] = useState('')
    const [peopleAdd, setPeopleAdd] = useState([])

    const HandlePeople= () => {
      Keyboard.dismiss();
      if (add_people){
        setPeopleAdd([...peopleAdd, add_people]);
        setAddPeople(' ');
      }
    }
    const completeAdd = (index) =>{
      let itemsCopy = [...peopleAdd];
      itemsCopy.splice(index,1);
      setPeopleAdd(itemsCopy);
    }
  return (
    <View style={styles.container}>
      <View style={styles.greetingsContainer}>
        <Text style = {styles.greetings}>Lets Add some People</Text>

        <View style={styles.addingPeople}>
            {peopleAdd.map((item, index) =>{
              return (
                <TouchableOpacity key={index} onPress={()=> completeAdd(index)}>
                  <AddPeople text = {item}/>
                </TouchableOpacity>
                )})
            }
        </View>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding":"height"} style={styles.keyboardView}>
          <View style={styles.takeNameButton}>
            <TextInput style={styles.takeName} placeholder={"Enter a Name"} value={add_people} onChangeText={text =>setAddPeople(text)}/>
            <TouchableOpacity onPress={()=>HandlePeople()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>
                  Add
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
      <View style={styles.home_restaurants}>
          <Button style={styles.home}
          title="Home"
          onPress={() => navigation.navigate('Home')}
          options ={{title : 'Homeis'}}
        />
          <Button style={styles.restaurant}
          title="Restaurants"
          onPress={() => navigation.navigate('Restaurant')}
        />
      </View>
    </View>
  )
}

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