import { apiInstance } from './configs';

export const getListArticles = async () => {
    const path = '/data.json';
    const { data } = await apiInstance.get(path);
    return data;
};