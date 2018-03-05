import React, { Component } from 'react'
import { StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity, FlatList} from 'react-native'
import TextButton from './TextButton';
import Input from './Input';
import { getDecks } from '../utils/api';
import IndividualDeckView from './IndividualDeckView'


class DeckListView extends Component {

  state = {
    decks: '',
  }

  componentDidMount = () => {
    this.getDecks();
    this._sub = this.props.navigation.addListener(
      'didFocus',
      this.getDecks
    );
  }

  componentWillUnmount() {
    this._sub.remove();
  }

  getDecks = () => {
    getDecks()
    .then((decks)=> this.setState({decks}));
  }

  renderItem = (item) => {
      const deck = item.item;
      return (
        <View style={styles.decksList} key={deck.id}>
          <TouchableOpacity onPress={()=> {this.props.navigation.navigate(
                  'IndividualDeckView',
                  { deck }
                )}}>
            <Text style={{fontSize: 40, textAlign: 'center'}}>{deck.title}</Text>
            <Text style={{textAlign: 'center'}}>{(deck.cards).length} cards</Text>
          </TouchableOpacity>
        </View>
      )
  }


  render(){
    const decks = this.state.decks;
    return (
      <View style={styles.container}>
        {!!decks &&
          <FlatList
            data={decks}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
            />
        }
        {!decks &&
          <Text style={{fontSize: 20, textAlign: 'center', padding:20}}>No decks, please add a new Deck</Text>
        }
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
  },

  decksList: {
    padding: 30,
    borderBottomColor: '#000',
    borderBottomWidth: 1,

  },


})

export default DeckListView;
