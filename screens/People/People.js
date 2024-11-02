import { StyleSheet, Text, View, ScrollView, Button, FlatList} from 'react-native'
import React from 'react'


const People = ({navigation}) => {
  let people_store = [{
    name:"Mama"
  }]
  return (
    <ScrollView style={styles.container}>
        <FlatList
            data={people_store}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={{ margin: 10, padding: 10, borderBottomWidth: 1 }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                </View>
            )}
        />

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