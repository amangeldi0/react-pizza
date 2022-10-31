import {createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";
import {Pizza} from "./type";

const fetchPizza = createAsyncThunk<Pizza[]>(
    'pizza/fetchPizza',
    async () => {
        const response = await axios.get<Pizza[]>('https://635cd922cb6cf98e56a713d0.mockapi.io/items')
        return response.data
    }
)

export default fetchPizza;