import React, { Component } from 'react'
import { StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity} from 'react-native'
import TextButton from './TextButton';
import Input from './Input';
import { saveDeck } from '../utils/api';
import IndividualDeckView from './IndividualDeckView';

class NewDeckView extends Component {

  state = {
    title: '',
  }

  addNewDeck = () => {
    saveDeck(this.state.title)
      .then((deck) => {
        if (deck) {
          this.props.navigation.navigate(
              'IndividualDeckView',
              { deck }
          )
        }
      });
      this.props.updateDataFromApi;

  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 40}}>
          What is the title of your new deck?
        </Text>
        <Input placeholder={"Deck Title"} onChangeText={(value) => this.setState({title: value})}/>
        <TextButton onPress={this.addNewDeck}>
          Submit
        </TextButton>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
  }
})

export default NewDeckView;
