import axios, { AxiosPromise } from 'axios';

export const getData = async <T>(url: string): AxiosPromise<T> => {
    const response = await axios.get(url);
    return response;
};

export type TMonster = {
    id: string;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    height: number;
    weight: number;
};

export type TResponse = {
    users: TMonster[];
};
