import React, { Component } from 'react'
import { StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity} from 'react-native'
import TextButton from './TextButton';
import Input from './Input';
import Card from './Card';
import { green, red } from '../utils/colors'
import { getDeck } from '../utils/api';
import IndividualDeckView from './IndividualDeckView';



class QuizView extends Component {

  state = {
    deck: {},
    currentQuestion: {},
    indexQuestion: 0,
    correctAnswers: 0,
  }

  componentDidMount = () => {
    const deckId = this.props.navigation.state.params.deck.id;

    getDeck(deckId)
    .then((deck)=> this.setState({deck}));
  }

  correctAnswer = () => {

    this.setState(prevState=> ({
      indexQuestion: prevState.indexQuestion + 1,
      correctAnswers: prevState.correctAnswers + 1,
    }));
  }

  incorrectAnswer = () => {
    this.setState(prevState=> ({
      indexQuestion: prevState.indexQuestion + 1,
    }));

  }

  render(){
      const index = this.state.indexQuestion;
      const deck = this.state.deck || this.props.navigation.state.params.deck;
      const cards = deck.cards || [];
      const cardsLenght = cards.length || 0;

      const showGrade = (this.state.indexQuestion + 1) <= cardsLenght ? false : true;

      return (
        <View style={styles.container}>
            {!showGrade &&
              <View>
                <Text>{(this.state.indexQuestion+1)}/{cards.length}</Text>
                <Card card={cards[index]}/>
                <TextButton
                  onPress={this.correctAnswer}
                  style={styles.correctButton}>
                    Correct
                </TextButton>
                <TextButton
                  onPress={this.incorrectAnswer}
                  style={styles.incorrectButton}>
                    Incorrect
                </TextButton>
              </View>
          }

          {!!showGrade &&
            <View>
              <Text style={{fontSize: 20, textAlign: 'center', padding:20}}>
                Correct Answers: {this.state.correctAnswers}
              </Text>
              <TextButton onPress = {()=> {
                this.props.navigation.navigate(
                  'QuizView',
                  { deckId: deck.id }
              )}}> Restart Quiz </TextButton>
              <TextButton onPress = {()=> {
                this.props.navigation.navigate(
                  'IndividualDeckView',
                  { deckId: deck.id }
              )}}> Back to Deck </TextButton>

            </View>
          }
        </View>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  correctButton: {
    backgroundColor: green
  },

  incorrectButton: {
    backgroundColor: red
  }


})

export default QuizView;
