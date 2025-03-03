import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                    loader: () => fetch('../gameData.json')
                },
                {
                    path: "/login",
                    element: <LoginPage/>
                },
                {
                    path: "/register",
                    element: <RegisterPage/>
                }
            ]
        }
    ])

export default router;