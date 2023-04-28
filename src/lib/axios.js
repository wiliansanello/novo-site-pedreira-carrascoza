import axios from 'axios';
import * as dotenv from 'dotenv';

export function axios() {
    dotenv.config();

    const api = axios.create({
        baseURL: process.env.SERVER_ADDRESS
    });

    return api;
}
