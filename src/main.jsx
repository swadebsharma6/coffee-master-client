import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import Main from "./components/Main.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import UsersTrans from "./components/UsersTrans.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch(`https://coffee-store-server-pi-woad.vercel.app/coffee`),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-pi-woad.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: '/users2',
        element: <UsersTrans/>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch(`https://coffee-store-server-pi-woad.vercel.app/users`),
      },
    ],
  },
]);

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
