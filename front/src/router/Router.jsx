import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Basket from "../pages/basket/Basket";
import Detail from "../pages/detail/Detail";
import Add from "../pages/add/Add";
import Shop from '../pages/Shop'
import Pages from '../pages/Pages'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import Wishlist from "../pages/wishlist/Wishlist";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/pages",
    element: <Pages />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/wish",
    element: <Wishlist />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);

export default router;
