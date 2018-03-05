export const ADD_DECK = 'ADD_DECK'
export const ADD_ENTRY = 'ADD_ENTRY'

export function addDeck (deck) {
  return {
    type: RECEIVE_ENTRIES,
    entries,
  }
}

export function addEntry (entry) {
  return {
    type: ADD_ENTRY,
    entry,
  }
}
