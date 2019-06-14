import { types } from 'mobx-state-tree'

const WordsModel = types
  .model('WordsModel', {
    id: types.identifier,
    text: types.string,
    date: types.string
  })
  .views(self => ({
    get textAndDate() {
      return self.text + self.date
    }
  }))
  .actions(self => ({
    addBorsuk() {
      self.text = `${self.text} borsuk`
    }
  }))

export default WordsModel
