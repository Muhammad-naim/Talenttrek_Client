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
 import PaymentHistory from "../pages/dashboard/students/PaymentHistory";
import AddClass from "../pages/dashboard/instructor/AddClass";
import InstructorClasses from "../pages/dashboard/instructor/InstructorClasses";
import EditClass from "../pages/dashboard/instructor/EditClass";
import ManageClasses from "../pages/dashboard/admin/ManageClasses";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import InstructorRoute from "../firebase/instructorRoute/InstructorRoute";
import AdminRoute from "../firebase/adminRoute/AdminRoute";

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
                        element: <InstructorRoute><AddClass/></InstructorRoute>
                    },
                    {
                        path: 'Instructor-classes',
                        element: <InstructorRoute><InstructorClasses/></InstructorRoute>
                    },
                    {
                        path: 'update-class',
                        element: <InstructorRoute><EditClass/></InstructorRoute>
                    },
                    {
                        path: 'manage-classes',
                        element: <AdminRoute><ManageClasses/></AdminRoute>
                    },
                    {
                        path: 'manage-users',
                        element: <AdminRoute><ManageUsers/></AdminRoute>
                    },
                ]
            },                        
        ]
    },
]);

export default router;