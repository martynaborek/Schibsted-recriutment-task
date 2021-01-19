import { ArticleCategory, SortingType } from "../../../../constants"
import { Article } from "../model/Article"

export enum ArticlesActionType {
  TOGGLE_CATEGORY = "TOGGLE_CATEGORY",
  FETCH_ARTICLE = "FETCH_ARTICLE",
  FETCH_ARTICLE_SUCCESS = "FETCH_ARTICLE_SUCCESS",
  FETCH_ARTICLE_FAILED = "FETCH_ARTICLE_FAILED",
  TOGGLE_SORT_BY = "TOGGLE_SORT_BY",
}

export interface ArticlesState {
  loading: boolean
  categories: Array<ArticleCategory>
  values: Array<Article>
  error: string | null
  sortBy: SortingType
}

export const initialArticlesState: ArticlesState = {
  loading: false,
  categories: [ArticleCategory.fashion],
  values: [],
  error: null,
  sortBy: SortingType.DESC,
}

function sortValuesByType(values: Array<Article>, sortingType: SortingType) {
  return sortingType === SortingType.ASC
    ? values.sort((a, b) => (a.convertedDate > b.convertedDate ? 1 : -1))
    : values.sort((a, b) => (a.convertedDate > b.convertedDate ? -1 : 1))
}

function toggleSortBy(sortBy: SortingType) {
  if (sortBy === SortingType.ASC) {
    return SortingType.DESC
  }
  return SortingType.ASC
}

export const reducer = (
  state: ArticlesState = initialArticlesState,
  action: { type: string; payload?: any }
) => {
  const { type, payload } = action
  switch (type) {
    case ArticlesActionType.TOGGLE_CATEGORY: {
      const index = state.categories.findIndex(
        (category) => category === payload
      )
      if (index > -1) {
        if (state.categories.length === 1) {
          return state
        }
        return {
          ...state,
          categories: [
            ...state.categories.slice(0, index),
            ...state.categories.slice(index + 1),
          ],
        }
      }
      return {
        ...state,
        categories: [...state.categories, payload],
      }
    }
    case ArticlesActionType.FETCH_ARTICLE: {
      return {
        ...state,
        loading: true,
        values: [],
      }
    }
    case ArticlesActionType.FETCH_ARTICLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        values: sortValuesByType(payload, state.sortBy),
      }
    }
    case ArticlesActionType.FETCH_ARTICLE_FAILED: {
      return {
        ...state,
        loading: false,
        error: payload,
        values: [],
      }
    }
    case ArticlesActionType.TOGGLE_SORT_BY: {
      const sortBy = toggleSortBy(state.sortBy)
      return {
        ...state,
        sortBy,
        values: sortValuesByType(state.values, sortBy),
      }
    }
    default:
      return state
  }
}
