import React from 'react'
import { Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { black } from '../utils/colors'

export default function Input ({ children, style = {}, placeholder, onChangeText }) {
  return (
      <TextInput style={[styles.reset, style]} placeholder={placeholder} onChangeText={onChangeText}/>
  )
}

const styles = StyleSheet.create({
  reset: {
    borderColor: black,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
  }
})
