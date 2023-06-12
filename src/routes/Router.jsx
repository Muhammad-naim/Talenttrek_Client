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
import PrivateRoute from "../firebase/privateRoute/PrivateRoute";
import Payment from "../pages/dashboard/students/Payment";
import Test from "../pages/dashboard/test";
import PaymentHistory from "../pages/dashboard/students/PaymentHistory";
import AddClass from "../pages/dashboard/instructor/AddClass";
import InstructorClasses from "../pages/dashboard/instructor/InstructorClasses";
import EditClass from "../pages/dashboard/instructor/EditClass";

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
                element: <PrivateRoute><Dashboard/></PrivateRoute>,
                children: [
                    {
                        path: '/dashboard',
                        element: <MyProfile/>
                    },
                    {
                        path: 'myclasses',
                        element: <MyClasses/>
                    },
                    {
                        path: 'enrolled-class',
                        element: <EnrolledClasses/>
                    },
                    {
                        path: 'payment',
                        element: <Payment/>
                    },
                    {
                        path: 'history',
                        element: <PaymentHistory/>
                    },
                    {
                        path: 'add-class',
                        element: <AddClass/>
                    },
                    {
                        path: 'Instructor-classes',
                        element: <InstructorClasses/>
                    },
                    {
                        path: 'update-class',
                        element: <EditClass/>
                    },
                ]
            },            
            {
                path: 'test',
                element: <Test/>
            },
            // {
            //     path: 
            // },
            // {
            //     path: 
            // },
            // {
            //     path: 
            // },
        ]

    },
]);

export default router;