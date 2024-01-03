//REACT-ROUTER-DOM
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
//REDUX-TOOLKIT
import { Provider } from "react-redux";
import { store } from "./store";


export default function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}