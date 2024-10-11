import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React from 'react'

const People = ({navigation}) => {
  return (
    <ScrollView>
        <Text>
            hello there
        </Text>

        <Button 
          title="Lets Add some Friends!!"
          onPress={() => navigation.navigate('People_add')}
          options ={{title : 'Hey'}}
        />
    </ScrollView>
  )
}

export default People

const styles = StyleSheet.create({})