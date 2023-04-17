import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/Root";

const routes = createBrowserRouter([{
    path: "/",
    element: <RootPage />
}]);

export default routes;
