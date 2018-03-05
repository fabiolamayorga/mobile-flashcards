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
import DeckHome from './DeckHome';

import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/helpers';

import { TabNavigator, StackNavigator } from 'react-navigation'


class IndividualDeckView extends Component {

  state = {
    deck: '',
  }

  componentDidMount = () => {
  /*  const deckId = this.props.navigation.state.params.deckId;

    getDeck(deckId).then((deck) => {
      if (deck) {
        this.setState({ deck })
      }
    });*/
  }

  addQuestion = () => {
    console.log('props',this.props);
    this.props.navigation.navigate(
        'NewQuestionView',
        {
          deck: this.state.deck || this.props.navigation.state.params.deck,
          onGoBack: this.onGoBack
        }
    )
  }

  startQuiz = () => {
    this.props.navigation.navigate(
        'QuizView',
        {deckId: this.state.deck.id}
    );

    clearLocalNotification()
     .then(setLocalNotification)
  }

  onGoBack = () => {
  const deck = this.props.navigation.state.params.deck;

    getDeck(deck.id).then((result) =>
      this.setState({
        deck: result
      })
    )
  }

  render(){
    console.log(this.props.navigation);
    const cards = this.state.deck.cards || this.props.navigation.state.params.deck.cards;
    const deck = this.state.deck  || this.props.navigation.state.params.deck
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 40, textAlign: 'center'}}>{deck.title}</Text>
          <Text style={{fontSize: 20, textAlign: 'center', padding:20}}> {cards.length} cards</Text>
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

export default IndividualDeckView;
