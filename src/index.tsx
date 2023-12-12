import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.scss";
import { PopupDataProvider } from "./context/PopupContext";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
if (process.env.NODE_ENV === "production") {
    disableReactDevTools();
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/*" element={<App />} />)
);

root.render(
    <PopupDataProvider>
        <RouterProvider router={router} />
    </PopupDataProvider>
);
