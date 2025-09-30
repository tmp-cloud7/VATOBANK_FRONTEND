import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet";
import RegistrationSuccessful from "./pages/RegistrationSuccessful";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./app/store";
import RouteProtection from "./component/RouteProtection";
import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";
import Layout from "./component/ScrollToTop/Layout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Helmet>
            <title>VATO BANK- Home Page</title>
          </Helmet>
          <LandingPage />
          
        </Layout>
      ),
    },
    {
      path: "/login",
      element: (
        <Layout>
          <Helmet>
            <title>Login</title>
          </Helmet>
          <Login />
        </Layout>
      ),
    },
    {
      path: "/register",
      element: (
        <Layout>
          <Helmet>
            <title>Register</title>
          </Helmet>
          <Register />
        </Layout>
      ),
    },
    {
      path: "/dashboard/*",
      element: (
        <Layout>
          <Helmet>
            <title>Dashboard </title>
          </Helmet>
          <RouteProtection cmp={Dashboard} />
        </Layout>
      ),
    },
    // {
    //   path: "/successful",
    //   element: (
    //     <>
    //       <Helmet>
    //         <title>Registration Successful - My React App</title>
    //       </Helmet>
    //       <RegistrationSuccessful />
    //     </>
    //   ),
    // },
    {
      path: "/blogpage",
      element: (
        <Layout>
          <Helmet>
            <title>Blog Page </title>
          </Helmet>
          <BlogPage />
        </Layout>
      ),
    },
    {
      path: "/servicespage",
      element: (
        <Layout>
          <Helmet>
            <title>Services </title>
          </Helmet>
          <ServicesPage />
        </Layout>
      ),
    },
  ]);

  return (
    <Provider store={store}>
      {/* <ScrollToTop /> */}
      <RouterProvider router={routes}></RouterProvider>
    </Provider>
  );
}

export default App;

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import Redirect from "./pages/Redirect";
// import RegistrationSuccessful from "./pages/RegistrationSuccessful";
// import Dashboard from "./pages/Dashboard";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import { Provider } from "react-redux";
// import store from "./app/store";
// import RouteProtection from "./component/RouteProtection";
// import LandingPage from "./pages/LandingPage";
// import BlogPage from "./pages/BlogPage";
// import ServicesPage from "./pages/ServicesPage";





// function App() {

//   const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage/>,
//   },
//   {
//     path: "/login",
//     element: <Login/>,
//   },
//   {
//     path: "/register",
//     element: <Register/>,
//   },
//   {
//     path: "/dashboard/*",
//     element:  <RouteProtection cmp={Dashboard} />,
//   },
//   {
//     path: "/successful",
//     element: <RegistrationSuccessful/>,
//   },
//   {
//     path: "/blogpage",
//     element: <BlogPage/>,
//   },
//   {
//     path: "/servicespage",
//     element: <ServicesPage/>,
//   },
 
 
// ])
//   return (
    
//     <Provider store={store}>
//       <RouterProvider router={routes}></RouterProvider>
//     </Provider>
    
   
//   );
// }

// export default App;
