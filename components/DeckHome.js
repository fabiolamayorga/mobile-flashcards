import React, { Component } from 'react'
import { StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity} from 'react-native'
import TextButton from './TextButton';
import Input from './Input';
import { getDeck } from '../utils/api';
import NewQuestionView from './NewQuestionView';
import QuizView from './QuizView';

import { TabNavigator, StackNavigator } from 'react-navigation'


class DeckHome extends Component {

  addQuestion = () => {
    console.log('props',this.props);
    this.props.navigation.navigate(
        'NewQuestionView',
    )
  }

  startQuiz = () => {
    this.props.navigation.navigate(
        'QuizView',
    )
  }

  render(){
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 40, textAlign: 'center'}}>Title</Text>
        <TextButton onPress={this.addQuestion}>Add Card</TextButton>
        <TextButton style={styles.invertedButton} onPress={this.startQuiz}>Start Quiz</TextButton>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  invertedButton: {
    backgroundColor: '#fff',
    color: '#000',
  }

})

export default DeckHome;
