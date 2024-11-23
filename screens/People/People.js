import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import { FlatList,TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

class People extends React.Component {
  constructor(inProps) {
    super(inProps);
    this.state = { peopleData: [] };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    try {
      const people = await AsyncStorage.getItem("people");
      const peopleData = people ? JSON.parse(people) : [];
      this.setState({ peopleData });
    } catch (error) {
      console.error("Error loading people:", error);
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
              let inPeople = await AsyncStorage.getItem("people");
              inPeople = inPeople ? JSON.parse(inPeople) : [];

              const updatedPeople = inPeople.filter(
                (people) => people.key !== item.key
              );

              await AsyncStorage.setItem("people", JSON.stringify(updatedPeople));
              this.setState({ listData: updatedPeople });

              Toast.show({
                type: 'error',
                text1: 'Person Removed',
                text2: 'The person has been successfully removed.',
                position: 'bottom',
                visibilityTime: 2000,
              });
            } catch (error) {
              console.error("Error deleting person:", error);
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
            <Button
              title='Add Friends'
              onPress={() => navigation.navigate('People_add')}
              style={styles.addRestauarant}
            >
              Add People
            </Button>
            <FlatList
              style={styles.restaurantList}
              data={this.state.peopleData}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <View style={styles.restaurantContainer}>
                  <Text style={styles.restaurantName} onPress={() => this.props.navigation.navigate('PeopleDetails', item)}>{item.name}</Text>
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

export default People;

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
