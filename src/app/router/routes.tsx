import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

import  DashboardHome from "../../pages/DashboardHome";
import  Analytics from "../../pages/Analytics";
import  Services from "../../pages/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome/>,
      },
      {
        path: "/analytics",
        element: <Analytics/> ,
      },
      {
        path: "/service",
        element: <Services/> ,
      },
    ],
  },
]);

