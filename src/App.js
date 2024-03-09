import  ReactDOM  from "react-dom/client";
import Body  from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {createBrowserRouter,RouterProvider,Outlet, Await} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Cart from "./components/cart.js";
import Contact from "./components/Contact.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";

//chunking
// dynamic bundling
//Lazy loading
//on demand loading
// code splitting

//dynamic import 
const AppLayout = ()=>{

    return (
        <Provider store={store}>
            <Header/>
            <Outlet />
            <Footer />
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/menu/:id",
                element:<RestaurantMenu />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/cart",
                element:<Cart />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/signUp",
                element:<SignUp />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);