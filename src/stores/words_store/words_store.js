import { types } from 'mobx-state-tree'
import WordModel from '../../models/word_model/word_model'
import exampleWords from './example.json'

const WordsStore = types
  .model('WordsStore', {
    wordModels: types.optional(types.map(WordModel), {}),
  })
  .views(self => ({
    get textAndDate() {
      return self.text + self.date
    },
    get wordsList() {
      return Array.from(self.wordModels.values())
    },
    get betterWordsList() {
      return self.wordsList.map(word => `${word.text}-shit`)
    },
    awesomeWordsList(arg) {
      return []
    }
  }))
  .actions(self => ( {
    changeWords() {
      self.wordsList.forEach(borsukWorld => {
        borsukWorld.addBorsuk()
      })
    },

    addWord(word) {
      const date = new Date().toString()
      const id = `${word}-${date}`
      if(word === 'borsuk') {
          self.changeWords()
      }
      self.wordModels.set(id, { id , text: word, date })

    },
    loadExamples() {
      exampleWords.forEach((exampleWord) => {
        return self.wordModels.set(exampleWord.id, { id: exampleWord.id, text: exampleWord.text, date: exampleWord.date })
      })
    }
  }))

export default WordsStore


// class WordsStore {
//   @observable wordModels = new Map()
//
//   @computed get worldList() {
//     return Array.from(this.wordModels.values())
//   }
//
//   @action addWord(word) {
//     this.wordModels.set()
//   }
// }
