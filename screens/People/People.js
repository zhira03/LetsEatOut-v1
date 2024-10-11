import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React from 'react'


const People = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
        <Text>
            hello there
        </Text>

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