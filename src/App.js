import React from "react";
import ReactDOM from "react-dom/client";
// default import
import Header from "./components/Header";
// or
// import Header from "./components/Header.js";
// named import 
// and this is not object destructuring, it's extracting
// import { Title } from "./components/Header";

import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/restaurantMenu";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
// const heading = React.createElement(
//     "h1",
//     {
//         id: "greeting",
//         className: "title",
//         style: {
//             color: "red"
//         },
//         key: "h1"
//     },
//     "Radhe Radhe"
//     );

// const heading2 = React.createElement(
//     "h2",
//     {
//         id: "name",
//         style: {
//             color: "skyblue"
//         },
//         key: "h2"
//     },
//     "My name is Neeraj"
//     );
//  const heading3 = React.createElement(
//         'h3',
//         {
//             className: 'greeting',
//             key: "h3"
//         },
//         'Hello ',
//         React.createElement('i', {key: "i"}, "Neeraj"),
//         '. Welcome!'
//     );

// we can also create a function and call it in createElement
// function Greeting({ age }) {
//     return React.createElement(
//         'h4',
//         {
//             className: 'age',
//             key: "h4"
//         },
//         'Age: ',
//       React.createElement('i', {key: "i"}, age),
//       ' HMMMM!!!!'
//     );
//   }
// const nameContainer = React.createElement(Greeting, {
//     age: 25,
// })

// const container = React.createElement(
//     "div",
//     {
//         id:"container",
//         key: "div"
//     },
//     // heading1, heading2 // the third parameter is known as children
//     // and for one parent we can have multiple children
//     // or
//     [heading, headingJSX]
// )

// JSX

// react element
// const TitleElement = (
//   <h1 id="title-jsx-ele" key="title-jsx-ele">
//     Radhe Radhe with JSX element
//   </h1>
// );
// const TitleFunction = () => (
//     <h1 id="title-jsx-func" key="title-jsx-func">
//       Radhe Radhe with functional comp
//     </h1>
//   );

// var val = 10;
// // component

// const HeaderComponent = () => {
//   return (
//     <div>
//       {TitleElement}
//       <TitleFunction/>
//       {TitleFunction ()}
//       {
//           val
//       }
//       {
//           1+2
//       }
//         {
//             JSON.stringify(
//                 {
//                     "check":"ghjkl"
//                 }
//             )
//         }
//       <h1> Radhe Radhe to functional component</h1>
//       <h2>h2 tag</h2>
//     </div>
//   );
// };

/* 
    Header
        - Logo
        - Nav Items(right side)
        - Cart
    Body
        - Search bar
        - RestaurantList
            - RestaurantCard (many cards)
                - Image
                - Name
                - Rating
                - Cusines
    Footer
        - links
        - copyright
*/

const AppLayout = () => {
    return (
        // {
        //     /*
        //         JSX can only have one parent, 
        //         either we need to put an extra div 
        //         or we can use React.Fragment
        //      */
        // }

        // {
            // Method 1
        // }
        
        // {
            // <div>
            //     <Header/>
            //     <Body/>
            //     <Footer/>
            // </div>
        // }

        // {
            // Method 2
        // }

        // <React.Fragment>
        //     <Header/>
        //     <Body/>
        //     <Footer/>
        // </React.Fragment>

        // or use the shorthand method
        <>
            <Header/>
            {<Outlet />}
            {/* <Body/> */}
            <Footer />
        </>
    )
}

// routing

// creating a router
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                // slash(/) means from the root, tells that its from the root
                path: "/about", // parentPath/{path} => localhost:1234/about
                element: <About />,
                children: [
                    {
                        // here it means from the children of root
                        // but if we use /profile then it means localhost:1234/profile
                        // and it will throw error

                        path: "profile",
                        element: <Profile /> // parentPath/{path} => localhost:1234/about/profile
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },

        ]
    }
    
])
// modify dom
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
