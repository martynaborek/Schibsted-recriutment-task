// constants
import {API, ArticleCategory} from "../../../../constants"
// helpers
import {convertNorwayMonthToNumber} from "../../../../helpers/NorwayMonth"
// types
import {Article} from "../model/Article"
import {ArticleResponse} from "../model/ArticleResponse"

interface ArticleCache {
    timestamp: number
    articles: Array<Article>
}

const cache: { [key: string]: ArticleCache } = {}

function checkCache(category: ArticleCategory): Array<Article> | null {
    const findArticleCategory = cache[category]
    if (findArticleCategory) {
        const timestamp = Date.now()
        if (Math.abs(findArticleCategory.timestamp - timestamp) < 30 * 1000) {
            return findArticleCategory.articles
        }
    }

    return null
}

function addToCache(category: ArticleCategory, articles: Array<Article>) {
    cache[category] = {
        timestamp: Date.now(),
        articles,
    }
    return articles
}

export function convertNorwegianDate(date: string): Date {
    const [day, month, year] = date.split(" ")
    return new Date(
        parseInt(year),
        convertNorwayMonthToNumber(month),
        parseInt(day)
    )
}

export function loadArticles(
    category: ArticleCategory
): Promise<Array<Article>> {
    const cachedArticles = checkCache(category)
    if (cachedArticles) {
        return new Promise((resolve) => {
            resolve(cachedArticles);
        })
    }

    return fetch(API.articles[category])
        .then((response) => {
            if(response.ok) {
                return response.json()
            }
            throw new Error('Something went wrong.');
        })
        .then((response) => {
            const {articles} = response as ArticleResponse
            const articlesWithConvertedDate: Array<Article> = articles.map(
                (article) => ({
                    ...article,
                    convertedDate: convertNorwegianDate(article.date),
                })
            )
            addToCache(category, articlesWithConvertedDate)
            return articlesWithConvertedDate
        })
}
