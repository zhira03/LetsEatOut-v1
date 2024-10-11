import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home  from './screens/Home';
import Restaurant from './screens/Restaurant/Restaurant-BackeEnd';
import People from './screens/People/People';
import AddRestaurant from './screens/Restaurant/Add-Restaurant';
import People_add from './screens/People/People_add';

function Restaurants(){
  return (
    <TabActions.Navigator>
      <TabActions.Screen name ='AddRestaurant' component={AddRestaurant}/>
    </TabActions.Navigator>
  );
}
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
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={({ navigation }) => ({  
            headerTitle: (props) => <HomeImage {...props} />,
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('People')}
                title="People"
                color="#fff"
              />
            ),
            headerLeft: () => (
              <Button
                onPress={() => navigation.navigate('Restaurant')}
                title="Restaurant"
                color="#fff"
              />
            ),
          })}
        />
        <Stack.Screen 
          name="Restaurant" 
          component={Restaurant} 
          options={{ title: 'Restaurant'
          }} 
        />
        <Stack.Screen name = 'Restaurants' component={Restaurants} options={{headerShown:false}}/>
        <Stack.Screen  name="People" component={People} />
        <Stack.Screen  name="People_add" component={People_add} />
        <Stack.Screen  name="Add-Restaurant" component={AddRestaurant} />
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
});
