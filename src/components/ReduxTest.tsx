import React, { FunctionComponent, MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'

import { fetchArticles, deleteArticle } from '../store/articles/actions'

import { Article } from '../store/articles/types'

import { AppState } from '../store'

interface ReduxTestProps {}

const ReduxTest: FunctionComponent<ReduxTestProps> = ({}) => {
  const articles = useSelector((state: AppState) => state.articles)
  const dispatch = useDispatch()
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    const dummy = [
      {
        id: 1,
        title: 'One',
        content: 'string',
      },
      {
        id: 2,
        title: 'Two',
        content: 'string',
      },
      {
        id: 3,
        title: 'Three',
        content: 'string',
      },
    ]
    dispatch(fetchArticles(dummy))
  }
  const handleDelete = (
    event: MouseEvent<HTMLDivElement>,
    index: number,
  ): void => {
    dispatch(deleteArticle(index))
  }
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Redux
      </Button>
      {articles.articles.map((article: Article, index: number) => {
        return (
          <div
            onClick={(evt) => handleDelete(evt, article.id)}
            key={article.id}
          >
            {article.title}
          </div>
        )
      })}
    </div>
  )
}

export default ReduxTest
