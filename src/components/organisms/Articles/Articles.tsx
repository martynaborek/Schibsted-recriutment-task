import React, { useEffect, useReducer } from "react"
// redux
import {
  ArticlesActionType,
  initialArticlesState,
  reducer,
} from "./recuder/Articles.reducer"
// services
import { loadArticles } from "./service/Articles.service"
// components
import ArticleItem from "../../molecules/ArticleItem/ArticleItem"
import Error from "../../molecules/Error"
import { ButtonSorting } from "../../atoms/Buttons"
// constants
import { ArticleCategory } from "../../../constants"
// types
import { Article } from "./model/Article"
// styles
import {
  ArticlesStyled,
  ArticleHeaderStyled,
  CheckboxStyled,
  DataSourcesStyled,
  WrapperStyled,
} from "./ArticleStyled"
import Loader from "../../atoms/Loader"

const Articles = () => {
  const [state, dispatch] = useReducer(reducer, initialArticlesState)
  useEffect(() => {
    dispatch({ type: ArticlesActionType.FETCH_ARTICLE })
    const loadAllArticles = async () => {

      // @ts-ignore
      const promises = state.categories.map((category: ArticleCategory) => loadArticles(category))
      Promise.all(promises)
          .then((results) => {
            console.log(results);
            const payload: any = results.reduce((acc: Array<any>, value: any) => [...acc, ...value], [])
            dispatch({ type: ArticlesActionType.FETCH_ARTICLE_SUCCESS, payload })
          })
          .catch((err) => {
            dispatch({
              type: ArticlesActionType.FETCH_ARTICLE_FAILED,
              payload: "Error",
            })
          })
    }

    loadAllArticles()
  }, [state.categories])

  // @ts-ignore
  const articles= state.values.map((article: Article) => (
    <ArticleItem article={article} key={article.id} />
  ))

  return (
    <ArticlesStyled>
      {/* TODO: Add bootstrap or css grid to make the article header look like the mockups*/}
      {/*TODO: create a reusable checkbox component*/}
      <ArticleHeaderStyled>
        <DataSourcesStyled>
          <h3 className="title">Data sources:</h3>
          <div className="data">
            <CheckboxStyled>
              <input
                type="checkbox"
                value={ArticleCategory.fashion}
                checked={state.categories.includes(ArticleCategory.fashion)}
                onChange={() =>
                  dispatch({
                    type: ArticlesActionType.TOGGLE_CATEGORY,
                    payload: ArticleCategory.fashion,
                  })
                }
              />
              <span className="check" />
              <span className="label">Fashion</span>
            </CheckboxStyled>
            <CheckboxStyled>
              <input
                type="checkbox"
                value={ArticleCategory.sport}
                checked={state.categories.includes(ArticleCategory.sport)}
                onClick={() =>
                  dispatch({
                    type: ArticlesActionType.TOGGLE_CATEGORY,
                    payload: ArticleCategory.sport,
                  })
                }
              />
              <span className="check" />
              <span className="label">Sport</span>
            </CheckboxStyled>
          </div>
        </DataSourcesStyled>
        <ButtonSorting
          sortBy={state.sortBy}
          onClick={() => dispatch({ type: ArticlesActionType.TOGGLE_SORT_BY })}
        />
      </ArticleHeaderStyled>
      <div>
        {state.loading && (
          <WrapperStyled>
            <Loader />
          </WrapperStyled>
        )}
        {state.loading === false && articles}
        {state.error && (
          <WrapperStyled>
            <Error />
          </WrapperStyled>
        )}
      </div>
    </ArticlesStyled>
  )
}

export default Articles
