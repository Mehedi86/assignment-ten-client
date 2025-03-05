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
import PrivateRoute from "../components/PrivateRoute";
import GameWatchList from "../pages/GameWatchList";

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
                    element: <PrivateRoute><AddReview/></PrivateRoute>
                    
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
                    path: "/myReviews/:email",
                    element: <PrivateRoute><MyReviews/></PrivateRoute>,
                    loader: ({params})=> fetch(`http://localhost:5000/reviews/yourReview/${params.email}`)
                },
                {
                    path: "/gameWatchList/:email",
                    element: <PrivateRoute><GameWatchList/></PrivateRoute>,
                    loader: ({params})=> fetch(`http://localhost:5000/myWatchlist/${params.email}`)
                }
            ]
        }
    ])

export default router;