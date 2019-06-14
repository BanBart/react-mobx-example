import { types } from 'mobx-state-tree'
import WordsStore from '../words_store/words_store'

const AppStore = types
  .model('AppStore', {
    wordsStore: types.optional(WordsStore, {}),
  })

export default AppStore
