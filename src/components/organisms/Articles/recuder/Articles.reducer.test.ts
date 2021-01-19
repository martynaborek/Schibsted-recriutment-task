import {ArticlesActionType, ArticlesState, initialArticlesState, reducer} from "./Articles.reducer";
import {ArticleCategory} from "../../../../constants";
import {Article} from "../model/Article";

const MOCK_ARTICLES: Array<Article> = [
    {
        id: 1,
        date: '2. februar 2019',
        convertedDate: new Date(2019, 1, 2),
        image: 'https://placeimg.com/280/180/nature',
        category: 'sport',
        title: 'title 1',
        preamble: 'preamble 1'
    },
    {
        id: 2,
        date: '1. oktober 2018',
        convertedDate: new Date(2018, 9, 1),
        image: 'https://placeimg.com/280/180/nature',
        category: 'sport',
        title: 'title 2',
        preamble: 'preamble 2'
    },
    {
        id: 3,
        date: '5. februar 2019',
        convertedDate: new Date(2019, 1, 5),
        image: 'https://placeimg.com/300/180/arch',
        category: 'fashion',
        title: 'title 3',
        preamble: 'preamble 3'
    },
]

describe('Articles reducer tests', () => {
    test('Toggle Category - turn on second category', () => {
        // when
        const initialState = initialArticlesState;
        const action = {type: ArticlesActionType.TOGGLE_CATEGORY, payload: ArticleCategory.sport}

        // do
        const retState = reducer(initialState, action);

        // then
        expect(retState.categories.length).toEqual(2);
    })
    test('Toggle Category - Prevent to disable category if only one is selected', () => {
        // when
        const initialState = initialArticlesState;
        const action = {type: ArticlesActionType.TOGGLE_CATEGORY, payload: ArticleCategory.fashion}

        // do
        const retState = reducer(initialState, action);

        // then
        expect(retState.categories.length).toEqual(1);
        expect(retState.categories).toEqual([ArticleCategory.fashion])
    })

    test('Toggle Category - Turn off fashion category if both selected', () => {
        // when
        const initialState: ArticlesState = {
            ...initialArticlesState,
            categories: [ArticleCategory.fashion, ArticleCategory.sport]
        };
        const action = {type: ArticlesActionType.TOGGLE_CATEGORY, payload: ArticleCategory.fashion}

        // do
        const retState = reducer(initialState, action);

        // then
        expect(retState.categories.length).toEqual(1);
        expect(retState.categories).toEqual([ArticleCategory.sport])
    })

    test('Fetch Articles Start', () => {
        // when
        const initialState: ArticlesState = {
            ...initialArticlesState,
        };
        const action = {type: ArticlesActionType.FETCH_ARTICLE}

        // do
        const retState = reducer(initialState, action);

        // then
        expect(retState.loading).toEqual(true);
    })

    test('Fetch Articles Success and should be sorter by DESC', () => {
        // when
        const initialState: ArticlesState = {
            ...initialArticlesState,
            loading: true
        };

        const action = {type: ArticlesActionType.FETCH_ARTICLE_SUCCESS, payload: MOCK_ARTICLES}

        // do
        const retState = reducer(initialState, action);

        // then
        expect(retState.loading).toEqual(false);
        expect(retState.values.length).toEqual(3);
        expect(retState.values[0].title).toEqual('title 3')
        expect(retState.values[1].title).toEqual('title 1')
        expect(retState.values[2].title).toEqual('title 2')
    })

    test('Fetch Articles Failed', () => {
        // when
        const initialState: ArticlesState = {
            ...initialArticlesState,
        };
        const action = {type: ArticlesActionType.FETCH_ARTICLE_FAILED, payload: 'Internal Server Error'}

        // do
        const retState = reducer(initialState, action);

        // then
        expect(retState.loading).toEqual(false);
        expect(retState.values.length).toEqual(0);
        expect(retState.error).toEqual('Internal Server Error');
    })

    test('Fetch Articles Success and toggle sort to ASC', () => {
        // when
        const initialState: ArticlesState = {
            ...initialArticlesState,
            loading: true
        };

        const action = {type: ArticlesActionType.FETCH_ARTICLE_SUCCESS, payload: MOCK_ARTICLES}

        // do
        const stateWithArticles = reducer(initialState, action);

        const actionASC = {type: ArticlesActionType.TOGGLE_SORT_BY}
        const stateWitArticlesASC = reducer(stateWithArticles, actionASC)
        // then
        expect(stateWitArticlesASC.values.length).toEqual(3);
        expect(stateWitArticlesASC.values[0].title).toEqual('title 2')
        expect(stateWitArticlesASC.values[1].title).toEqual('title 1')
        expect(stateWitArticlesASC.values[2].title).toEqual('title 3')
    })

});