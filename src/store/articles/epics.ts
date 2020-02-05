import { ofType, ActionsObservable, StateObservable } from 'redux-observable'
import * as actions from './actions'
import { ajax } from 'rxjs/ajax'
import { AppState } from '../index'
import { of } from 'rxjs'
import { withLatestFrom, mergeMap, map } from 'rxjs/operators'

export const fetchTodosEpic = (
  $action: ActionsObservable<actions.ArticleActions>,
  $state: StateObservable<AppState>,
) => {
  return $action.pipe(
    ofType(actions.GET_ARTICLES),
    withLatestFrom($state),
    mergeMap(([action, state]) => {
      return ajax({
        method: 'GET',
        responseType: 'json',
        headers: {
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
          'X-RapidAPI-Key':
            '8a017e8d38msh65a761b2d05f4dbp14997djsn2202fd576cb2',
        },
        url: 'https://api-football-v1.p.rapidapi.com/v2/leagueTable/565',
      }).pipe(
        map((payload) => {
          console.log(payload)
          return {
            type: actions.ARTICLE_LEAGUE,
            payload: payload.response,
          }
        }),
      )
    }),
  )
}

// export const fetchTodosEpic = (
//   $action: ActionsObservable<actions.ArticleActions>,
//   $state: StateObservable<AppState>,
// ) => {
//   return $action.pipe(
//     ofType(actions.GET_ARTICLES),
//     withLatestFrom($state),
//     mergeMap(([action, state]) => {
//       action = action as ReturnType<typeof actions.deleteArticle>
//       return of({ type: actions.ARTICLE_DELETED })
//     }),
//   )
// }

export const deleteTodosEpic = (
  $action: ActionsObservable<actions.ArticleActions>,
  $state: StateObservable<AppState>,
) =>
  $action.pipe(
    ofType(actions.DELETE_ARTICLE),
    withLatestFrom($state),
    mergeMap(([action, state]) => {
      return of({
        type: actions.ARTICLE_DELETED,
      })
    }),
  )
