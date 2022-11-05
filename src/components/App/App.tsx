import {FC, lazy} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Cart from "../../pages/Cart";
import NotFound from "../../pages/NotFound";
import TakeOrder from "../TakeOrder/TakeOrder";

const Pizza = lazy(() => import("../../pages/Pizza"))

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