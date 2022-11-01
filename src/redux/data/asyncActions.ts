import {createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";
import {Pizza, SearchPizzaParams} from "./type";

const fetchPizza = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'pizza/fetchPizza',
    async (params) => {
        const {sort} = params
        const response = await axios.get<Pizza[]>(`https://635cd922cb6cf98e56a713d0.mockapi.io/items?sortBy=${sort}&order=desc`)
        return response.data
    }
)

export default fetchPizza;