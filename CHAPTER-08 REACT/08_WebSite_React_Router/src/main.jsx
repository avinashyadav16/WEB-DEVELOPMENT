import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import User from "./components/User/User";
import Github from "./components/Github/Github";
import GithubInfoLoader from "./components/Github/GithubInfoLoader";
import Layout from "./Layout";

// Method - 01:

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Route />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "About",
//         element: <About />,
//       },
//       {
//         path: "ContactUs",
//         element: <ContactUs />,
//       },
//     ],
//   },
// ]);

// Method - 02:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="ContactUs" element={<ContactUs />} />
      <Route path="User/:userid" element={<User />} />
      <Route loader={GithubInfoLoader} path="Github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
