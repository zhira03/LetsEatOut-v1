import { StyleSheet, Text, View ,Alert, AsyncStorage, BackHandler, FlatList, Picker, Platform, 
ScrollView, Button} from 'react-native'
import React,  {useState} from 'react'
import AddRestaurant from './Add-Restaurant'
import { Constants } from "expo";



const Restaurant = ({navigation}) => {
    const [add_restaurant, setAddRestaurant] = useState('')
    const [restaurantAdd, setRestaurantAdd] = useState([])

    const HandlePeople= () => {
      Keyboard.dismiss();
      if (add_restaurant){
        setRestaurantAdd([...restaurantAdd, add_restaurant]);
        setAddRestaurant(' ');
      }
    }
    const completeAdd = (index) =>{
      let itemsCopy = [...restaurantAdd];
      itemsCopy.splice(index,1);
      setRestaurantAdd(itemsCopy);
    }

  return (
    <View>
      <Text>hey there this are all the Restaurants Available</Text>
        <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
        options ={{title : 'Homeis'}}
      />
    </View>
  )
}

export default Restaurant


const styles = StyleSheet.create({})