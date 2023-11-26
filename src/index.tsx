import ReactDOM from "react-dom/client";
import App from "./App";
import { PopupDataProvider } from "./context/PopupContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
if (process.env.NODE_ENV === "production") {
    disableReactDevTools();
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <HashRouter>
        <PopupDataProvider>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </PopupDataProvider>
    </HashRouter>
);
