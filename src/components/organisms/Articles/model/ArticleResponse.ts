export interface ArticleResponse {
    articles: Array<{
        id: number;
        date: string;
        image: string;
        category: string;
        title: string;
        preamble: string;
    }>;
}