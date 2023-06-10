import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import LoginPage from "../pages/loginPage/LoginPage";
import SignupPage from "../pages/signupPage/SignupPage";
import InstructorsPage from "../pages/instructorsPage/InstructorsPage";
import ClassesPage from "../pages/classesPage/ClassesPage";
import Dashboard from "../pages/dashboard/Dashboard";
import MyClasses from "../pages/dashboard/students/MyClasses";
import EnrolledClasses from "../pages/dashboard/students/enrolledClasses";
import MyProfile from "../pages/dashboard/students/MyProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: "/login",
                element: <LoginPage/>
            },
            {
                path: "/signup",
                element: <SignupPage/>
            },
            {
                path: 'instructors',
                element: <InstructorsPage/>
            },
            {
                path: '/classes',
                element: <ClassesPage/>
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
                children: [
                    {
                        path: 'profile',
                        element: <MyProfile/>
                    },
                    {
                        path: 'myclasses',
                        element: <MyClasses/>
                    },
                    {
                        path: 'enrolled-class',
                        element: <EnrolledClasses/>
                    }
                ]
            },
            // {
            //     path: 
            // },
        ]

    },
]);

export default router;