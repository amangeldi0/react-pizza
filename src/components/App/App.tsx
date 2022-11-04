import {FC} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Pizza from "../../pages/Pizza";
import Cart from "../../pages/Cart";
import NotFound from "../../pages/NotFound";
import TakeOrder from "../TakeOrder/TakeOrder";

const App: FC = () => {
    return (
        <>

            <BrowserRouter>
                <Navbar />
                <TakeOrder />
                <Routes>
                    <Route path={'/react-pizza/'} element={<Pizza/>}/>
                    <Route path={'/react-pizza/cart'} element={<Cart />}/>
                    <Route path={'/react-pizza/*'} element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;