import { combineEpics, Epic } from 'redux-observable'
import * as articles from './articles/epics'

const modules = [articles]
console.log(modules)
let epics: Epic[] = []

modules.forEach((module) =>
  (Object.keys(module) as Array<keyof typeof module>).forEach((key) => {
    epics.push(module[key])
  }),
)

export default combineEpics(...epics)
