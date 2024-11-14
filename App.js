import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home  from './Home';
import Restaurants from './screens/Restaurant/Restaurant';
import People from './screens/People/People';
import AddRestaurant from './screens/Restaurant/Add-Restaurant';
import People_add from './screens/People/People_add';
import RestaurantDetails from './screens/Restaurant/RestaurantDetails';
import PeopleDetails from './screens/People/PeopleDetails';
import Decisions from './screens/Decisions/Decisions';


export default function App({navigation}) {
  const Stack = createNativeStackNavigator();
  const HomeImage = () =>{
    return (
        <Image style={{width:50, height:50}}
        source ={require('./assets/home.png')}
        />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen name="Home" component={Decisions} options={({ navigation }) => ({  
            headerTitle: (props) => <HomeImage {...props} />,
            headerRight: () => (
              <TouchableOpacity>
                <Text style={styles.displayIcon} onPress={() => navigation.navigate('People')} >
                People
                </Text>
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity>
                <Text onPress={() => navigation.navigate('Restaurants')}  style={styles.displayIcon}>
                Restaurants
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name = 'Restaurants' component={Restaurants} options={{headerShown:false}}/>
        <Stack.Screen  name="People" component={People} />
        <Stack.Screen  name="People_add" component={People_add} />
        <Stack.Screen  name="Add-Restaurant" component={AddRestaurant} />
        <Stack.Screen  name="RestaurantDetails" component={RestaurantDetails} />
        <Stack.Screen  name="PeopleDetails" component={PeopleDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayIcon:{
    color:'#fff',
    fontSize:18,
  }
});
