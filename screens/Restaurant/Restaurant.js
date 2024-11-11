import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import { FlatList,TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

class Restaurants extends React.Component {
  constructor(inProps) {
    super(inProps);
    this.state = { listData: [] };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    try {
      const restaurants = await AsyncStorage.getItem("restaurants");
      const listData = restaurants ? JSON.parse(restaurants) : [];
      this.setState({ listData });
    } catch (error) {
      console.error("Error loading restaurants:", error);
    }
  };

  

  handleDelete = (item) => {
    Alert.alert(
      "Are you sure you want to delete?",
      "",
      [
        {
          text: "Yes",
          onPress: async () => {
            try {
              let inRestaurants = await AsyncStorage.getItem("restaurants");
              inRestaurants = inRestaurants ? JSON.parse(inRestaurants) : [];

              const updatedRestaurants = inRestaurants.filter(
                (restaurant) => restaurant.key !== item.key
              );

              await AsyncStorage.setItem("restaurants", JSON.stringify(updatedRestaurants));
              this.setState({ listData: updatedRestaurants });

              Toast.show({
                type: 'error',
                text1: 'Restaurant Removed',
                text2: 'The restaurant has been successfully removed.',
                position: 'bottom',
                visibilityTime: 2000,
              });
            } catch (error) {
              console.error("Error deleting restaurant:", error);
            }
          },
        },
        { text: "No", style: 'cancel' }
      ],
      { cancelable: true }
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <Button
              title='Add Restaurant'
              onPress={() => navigation.navigate('Add-Restaurant')}
              style={styles.addRestauarant}
            >
              Add Restaurant
            </Button>
            <FlatList
              style={styles.restaurantList}
              data={this.state.listData}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <View style={styles.restaurantContainer}>
                  <Text style={styles.restaurantName} onPress={() => this.props.navigation.navigate('RestaurantDetails', item)}>{item.name}</Text>
                  <Button
                    title='Delete'
                    onPress={() => this.handleDelete(item)} // Pass item to handleDelete
                  >
                    Delete
                  </Button>
                </View>
              )}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

export default Restaurants;

const styles = StyleSheet.create({
  restaurantList: {
    marginTop: 20,
  },
  restaurantContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addRestauarant:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: '#f5f5f5',
  }
});
