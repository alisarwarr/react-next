//REACT-ROUTER-DOM
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
//REDUX-TOOLKIT
import { Provider } from "react-redux";
import { store } from "./store/store";


export default function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}