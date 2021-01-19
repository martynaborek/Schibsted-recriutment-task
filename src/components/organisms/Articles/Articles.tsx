import React, {useEffect, useReducer} from 'react';
import styled from 'styled-components'
import {loadArticles} from "./Articles.service";
import {ArticleCategory} from "../../../constants/ArticleCategory";
import {ArticlesActionType, initialArticlesState, reducer} from "./recuder/Articles.reducer";
import {Article} from "./model/Article";
import {SortingType} from "../../../constants/SortingType";

const ArticlesStyled = styled.div`
  margin-top: 12rem;
  padding: 1.5rem 2rem;
`

const SortByDate = ({sortBy, onClick}: any) => {
    const arrowSort = sortBy === SortingType.ASC ? 'A' : 'D';
    return (
        <button onClick={onClick}>
            <div>Sort by date:</div>
            <div>{arrowSort}</div>
        </button>
    );
}

const Articles = () => {
    const [state, dispatch] = useReducer(reducer, initialArticlesState);
    useEffect(() => {
        dispatch({type: ArticlesActionType.FETCH_ARTICLE});
        const loadAllArticles = async () => {
            const results = await Promise.all(state.categories.map((category: ArticleCategory) => loadArticles(category)))
            console.log(results);
            const error = results.filter(result => (result instanceof Error)).length > 0;
            if (error) {
                dispatch({type: ArticlesActionType.FETCH_ARTICLE_FAILED, payload: 'Error'})
            } else {
                const payload: Array<Article> = results.reduce((acc: Array<Article>, value: Array<Article>) => {
                    return [...acc, ...value]
                }, []);
                dispatch({type: ArticlesActionType.FETCH_ARTICLE_SUCCESS, payload});
            }
        }

        loadAllArticles();
    }, [state.categories])

    const articles = state.values.map((article: Article) => (
        <div>
            {article.title} - {article.date}
        </div>
    ))

    return (
        <ArticlesStyled>
            <div className="col-sm-12">
                <div className="radio">
                    <label>
                        <input type="radio"
                               value={ArticleCategory.fashion}
                               checked={state.categories.includes(ArticleCategory.fashion)}
                               onClick={() => dispatch({
                                   type: ArticlesActionType.TOGGLE_CATEGORY,
                                   payload: ArticleCategory.fashion
                               })}
                        />
                        Fashion
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value={ArticleCategory.sport}
                            checked={state.categories.includes(ArticleCategory.sport)}
                            onClick={() => dispatch({
                                type: ArticlesActionType.TOGGLE_CATEGORY,
                                payload: ArticleCategory.sport
                            })}/>
                        Sport
                    </label>
                </div>
            </div>
            <div>
                <SortByDate sortBy={state.sortBy} onClick={() => dispatch({type: ArticlesActionType.TOGGLE_SORT_BY})}/>
            </div>
            <div>
                {state.loading && 'loading'}
                {state.loading === false && articles}
                {state.error && 'error'}
            </div>
        </ArticlesStyled>
    );
};

export default Articles;