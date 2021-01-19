import {API} from "../../../../constants";
import {ArticleCategory} from "../../../../constants/ArticleCategory";
import {Article} from "../model/Article";
import {ArticleResponse} from "../model/ArticleResponse";
import {convertNorwayMonthToNumber} from "../../../../helpers/NorwayMonth";

interface ArticleCache {
    timestamp: number;
    articles: Array<Article>;
}

const cache: { [key: string]: ArticleCache } = {};

function checkCache(category: ArticleCategory): Array<Article> | null {
    const findArticleCategory = cache[category];
    if (findArticleCategory) {
        const timestamp = Date.now();
        if (Math.abs(findArticleCategory.timestamp - timestamp) < 30 * 1000) {
            return findArticleCategory.articles
        }
    }

    return null;
}

function addToCache(category: ArticleCategory, articles: Array<Article>) {
    cache[category] = {
        timestamp: Date.now(),
        articles
    }
    return articles;
}

// Convert Date from BE: '2. februar 2019' to javascript date
export function convertNorwegianDate(date: string): Date {
    const [day, month, year] = date.split(' ');
    return new Date(parseInt(year), convertNorwayMonthToNumber(month), parseInt(day));
}

export async function loadArticles(category: ArticleCategory): Promise<Array<Article> | Error> {
    const cachedArticles = checkCache(category);
    if (cachedArticles) {
        return cachedArticles;
    }

    const response = await fetch(API.articles[category]);
    if (response.ok) {
        const {articles} = await response.json() as ArticleResponse;
        const articlesWithConvertedDate: Array<Article> = articles.map((article) => ({
            ...article,
            convertedDate: convertNorwegianDate(article.date)
        }))
        addToCache(category, articlesWithConvertedDate)
        return articlesWithConvertedDate;
    }
    return new Error('Internal server error');
}