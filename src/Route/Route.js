import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddCourse from "../Pages/Courses/AddCourse";
import Course from "../Pages/Courses/Course";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Home from "../Pages/Home/Home";
import LogOut from "../Pages/Home/LogOut.js/LogOut";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/Reviews/MyReview";
import SignUp from "../Pages/Signin/SignUp";

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
                path: '/logout',
                element: <LogOut></LogOut>
            },
            {
                path: '/courses',
                element: <Course></Course>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/reviews',
                element: <MyReview></MyReview>
            },
            {
                path: '/add',
                element: <AddCourse></AddCourse>
            }
        ]
    }
]);
export default router;