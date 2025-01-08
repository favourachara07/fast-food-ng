import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

// actions in react-router is used to write/ mutate while loaders are used to read data
// loading & fetching data with react-router
const router = createBrowserRouter(
  [
    {
      // layout route that doesnt need path. since it doesnt have a path, its called a layout route
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // error msg here cos of more data fetching here and to keep teh layout when error occurs
        {
          // provide teh loader to one of our rouets as soon as teh app goes to teh route
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          // connecting teh acrtion to teh component to access any value in teh action func
          path: "/order/new",
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
        },
      ],
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
    },
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
