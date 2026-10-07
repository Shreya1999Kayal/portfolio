import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

// Single-page portfolio: one route only, all sections live inside Home.
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default Routes;
