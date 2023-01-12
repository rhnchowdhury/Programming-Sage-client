import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddCourse from "../Pages/Courses/AddCourse";
import Course from "../Pages/Courses/Course";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/Reviews/MyReview";
import SignUp from "../Pages/Signin/SignUp";
import Update from "../Pages/Updates/Update";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/courses',
                element: <Course></Course>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://server-gilt-xi.vercel.app/courses/${params.id}`)
            },
            {
                path: '/reviews',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/add',
                element: <PrivateRoute><AddCourse></AddCourse></PrivateRoute>
            },
            {
                path: '/updates',
                element: <Update></Update>
            }
        ]
    }
]);
export default router;