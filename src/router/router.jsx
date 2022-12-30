import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Main from "../root/Main";
import Login from "../components/pages/login/Login";
import DisplayError from "../components/common/displayError/DisplayError";
import { Register } from "../components/pages/login/Register";
import Reels from "../components/pages/reels/Reels";
import Video from "../components/pages/video/Video";
import Messaging from "../components/pages/messaging/Messaging";
import Notifications from "../components/pages/notifications/Notifications";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/reels",
        element: <Reels />,
      },
      {
        path: "/video",
        element: <Video />,
      },
      {
        path: "/messaging",
        element: <Messaging />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
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
]);
