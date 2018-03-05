import React, { Component } from 'react'
import { StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity} from 'react-native'
import TextButton from './TextButton';
import Input from './Input';
import { addCardToDeck } from '../utils/api';
import IndividualDeckView from './IndividualDeckView';


class NewQuestionView extends Component {

  componentDidMount = () => {
    const deckId = this.props.navigation.state.params.deck.id;
    this.setState({deckId});

    console.log(this.props.navigation.state.params.deck);
    //console.log(deckId);
  }

  addQuestion = () => {
    const deck = {
      question: this.state.question,
      answer: this.state.answer,
    };

    addCardToDeck(this.state.deckId, deck).then(()=>{
      this.props.navigation.state.params.onGoBack();
      this.props.navigation.goBack();
    }); //Add new question
  }

  render(){

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>New Question</Text>

        <Input placeholder={"Question"} onChangeText={(value) => this.setState({question: value})}/>
        <Input placeholder={"Answer"} onChangeText={(value) => this.setState({answer: value})}/>
        <TextButton onPress={this.addQuestion}>
          Submit
        </TextButton>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },



})

export default NewQuestionView;
