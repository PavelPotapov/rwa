import { InvestPage } from "@pages";
import { routePaths } from "@config";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: routePaths.notFound,
    element: <div>Not found</div>,
  },
  {
    path: routePaths.investPage,
    element: <InvestPage />,
  },
]);
