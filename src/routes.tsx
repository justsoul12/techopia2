import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import Form from "./pages/Form";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Form/>},
      { index: true, element: <HomePage /> },
      { path: 'games/:slug', element: <GameDetailPage /> }
    ]
  }
]);

export default router;

// live a life like thug nigga