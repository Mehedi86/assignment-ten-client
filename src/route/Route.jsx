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
import UpdateReview from "../pages/UpdateReview";

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
                    loader: () => fetch('https://assignment-10-server-side-neon.vercel.app/games')
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
                    loader: ()=> fetch('https://assignment-10-server-side-neon.vercel.app/reviews')
                },
                {
                    path: "/reviewDetails/:id",
                    element: <ReviewDetails/>,
                    loader: ({params})=> fetch(`https://assignment-10-server-side-neon.vercel.app/reviews/${params.id}`)
                },
                {
                    path: "/gameDetails/:id",
                    element: <GameDetails/>,
                    loader: ({params})=> fetch(`https://assignment-10-server-side-neon.vercel.app/games/${params.id}`)
                },
                {
                    path: "/myReviews/:email",
                    element: <PrivateRoute><MyReviews/></PrivateRoute>,
                    loader: ({params})=> fetch(`https://assignment-10-server-side-neon.vercel.app/reviews/yourReview/${params.email}`)
                },
                {
                    path: "/gameWatchList/:email",
                    element: <PrivateRoute><GameWatchList/></PrivateRoute>,
                    loader: ({params})=> fetch(`https://assignment-10-server-side-neon.vercel.app/myWatchlist/${params.email}`)
                },
                {
                    path: '/updateReview/:id',
                    element:<UpdateReview/>,
                    loader: ({params})=> fetch(`https://assignment-10-server-side-neon.vercel.app/reviews/${params.id}`)
                }
            ]
        }
    ])

export default router;