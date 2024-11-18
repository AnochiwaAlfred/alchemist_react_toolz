import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Accordions from "./pages/Accordions";
import ShoppingList from "./pages/ShoppingList";
import GithubUserSearch from "./pages/GithubUserSearch";
import GithubFollowers from "./pages/GithubFollowers";

import './index.css';


const router = createBrowserRouter([
  { 
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {index:true, element: <Home />},
      {path:"accordion", element: <Accordions/>},
      {path:"shopping-list", element: <ShoppingList/>},
      {path:"github-user-search", element: <GithubUserSearch/>},
      {path:"github-followers/:username", element: <GithubFollowers/>},
      // {path:"posts/:id", element: <PostDetail/>},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
