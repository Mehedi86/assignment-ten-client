import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AddReview from "../pages/AddReview";
import AllReviews from "../pages/AllReviews";
import ReviewDetails from "../pages/ReviewDetails";
import GameDetails from "../pages/GameDetails";
import MyReviews from "../pages/MyReviews";

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
                    loader: () => fetch('http://localhost:5000/games')
                },
                {
                    path: "/login",
                    element: <LoginPage/>
                },
                {
                    path: "/register",
                    element: <RegisterPage/>
                },
                {
                    path: "/addReview",
                    element: <AddReview/>
                },
                {
                    path: "/allReviews",
                    element: <AllReviews/>,
                    loader: ()=> fetch('http://localhost:5000/reviews')
                },
                {
                    path: "/reviewDetails/:id",
                    element: <ReviewDetails/>,
                    loader: ({params})=> fetch(`http://localhost:5000/reviews/${params.id}`)
                },
                {
                    path: "/gameDetails/:id",
                    element: <GameDetails/>,
                    loader: ({params})=> fetch(`http://localhost:5000/games/${params.id}`)
                },
                {
                    path: "/myReviews",
                    element: <MyReviews/>
                }
            ]
        }
    ])

export default router;