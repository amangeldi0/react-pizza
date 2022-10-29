import {FC, useEffect, useState} from 'react';
import { IPizza } from "../types/types";
import axios from "axios";
import PizzaItem from "../components/PizzaItem/PizzaItem";
const Pizza: FC = () => {
    const [data, setData] = useState<IPizza[]>([]);

    const fetchPizza = async () => {
      try {
          const response = await axios.get<IPizza[]>('https://635cd922cb6cf98e56a713d0.mockapi.io/items')
          setData(response.data)
      }catch (e){
          console.log(e)
      }
    }

    useEffect(() => {
        fetchPizza()
    }, [])
    return (
        <div className="pizza__page">
            <div className="pizza__page__container">
                {data.map(item => {
                    return <PizzaItem key={item.id} props={item}/>
                })}
            </div>
        </div>
    );
};

export default Pizza;