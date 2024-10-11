import { StyleSheet, Text, View } from 'react-native'
import React ,{ Component } from 'react'
import PropTypes from 'prop-types'

class CustomButton extends Component {
    render(){
        const {text, onPress, buttonStyle,textStyle,width,disabled} = 
        this.props;
    }
    CustomButton.PropTypes = {
        text : PropTypes.string.isRequired, onPress : PropTypes.func.isRequired,
        buttonStyle : PropTypes.object, textStyle : PropTypes.object,
        width : PropTypes.string, disabled : PropTypes.string
    };
}
const custonButton = () => {
  return (
    <View>
      <Text>custonButton</Text>
    </View>
  )
}

export default custonButton

const styles = StyleSheet.create({})