import React, { Component } from 'react'
import { StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity} from 'react-native'
import TextButton from './TextButton';
import Input from './Input';

import { getDeck } from '../utils/api';



class Card extends Component {

  state = {
    showAnswer: false,
    showAnswerText: 'Show Answer'
  }

  showAnswer = () => {
    this.setState(prevState=> ({
      showAnswer: !prevState.showAnswer,
      showAnswerText: !prevState.showAnswer ? 'Hide Answer' : 'Show Answer',
    }))
  }

  render(){
    const { card } = this.props || {};
    //console.log(card);
    return (
      <View style={styles.container}>
        { !!card &&
          <View>
            <Text style={{fontSize: 40, textAlign: 'center', padding:20}}>{card.question}</Text>
          </View>
        }

        {
          !!this.state.showAnswer &&
          <View>
            <Text style={{fontSize: 20, textAlign: 'center'}}>{card.answer}</Text>
          </View>
        }
        <TextButton onPress={this.showAnswer} style={styles.answer}>
          {this.state.showAnswerText}
        </TextButton>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  invertedButton: {
    backgroundColor: '#fff',
    color: '#000',
  },

  answer: {
    padding: 10,
  }

})

export default Card;
