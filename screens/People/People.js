import { StyleSheet, Text, View, ScrollView, Button, FlatList, } from 'react-native'
import React ,{useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const People = ({navigation}) => {
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    const fetchPeopleList = async () => {
      try {
        const storedPeople = await AsyncStorage.getItem('peopleList');
        if (storedPeople) {
          setPeopleList(JSON.parse(storedPeople));
        }
      } catch (error) {
        console.error("Failed to fetch people list:", error);
      }
    };

    fetchPeopleList();
  }, []);
  return (
    
    <ScrollView style={styles.container}>
        <View >
      <Text>List of People:</Text>
      {peopleList.map((person, index) => (
        <Text  style={{ fontWeight: 'bold' ,margin: 10, padding: 10, borderBottomWidth: 1 }} key={index}>{person}</Text>
      ))}
    </View>

        <Button 
          style={styles.moreFriends}
          title="Lets Add some Friends!!"
          onPress={() => navigation.navigate('People_add')}
          options ={{title : 'Hey'}}
        />
    </ScrollView>
  )
}

export default People

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    moreFriends:{
        position: 'absolute',
        bottom: 25, 
        left: 20,   
        right: 20,
        flexDirection: 'row',  
        justifyContent: 'space-between',  
        marginBottom:25,
    }
})