import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Main from "../root/Main";
import Login from "../login/Login";
import DisplayError from "../components/common/displayError/DisplayError";
import Reels from "../components/pages/reels/Reels";
import Video from "../components/pages/video/Video";
import Messaging from "../components/pages/messaging/Messaging";
import Notifications from "../components/pages/notifications/Notifications";
import Register from "../login/Register";
import PrivateRoute from "../private/PrivateRoute";
import LoginLayout from "../root/LoginLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/feed",
    element: <PrivateRoute><Main></Main></PrivateRoute>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/feed",
        element: <Home></Home>,
      },
      {
        path: "/feed/home",
        element: <Home></Home>,
      },
      {
        path: "/feed/reels",
        element: <Reels />,
      },
      {
        path: "/feed/video",
        element: <Video />,
      },
      {
        path: "/feed/messaging",
        element: <Messaging />,
      },
      {
        path: "/feed/notifications",
        element: <Notifications />,
      },
    ],
  },
]);
