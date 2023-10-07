import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import Form from "./pages/Form";
import Dashboard from './pages/Dashboard/DashLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {  path:'/', index:true, element: <Form/>},
      { path: '/form', index: true, element: <HomePage /> },
      { path: '/dashboard', index: true, element: <Dashboard/>},
      { path: 'games/:slug', element: <GameDetailPage /> }
    ]
  },
  
]);

export default router;

