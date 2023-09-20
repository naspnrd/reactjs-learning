// import { useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Food_Logo from "../assets/img/Food_Logo.png";


export const Title = () => {
  return (
    <a href="/">
      <img
        alt="logo"
        // src= "https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
        src={Food_Logo}
        className="logo"
      />
    </a>
  );
};

const Header = () => {
  // const [title, setTitle] = useState("FoodVilla");
  // console.log("re-rendered.....");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
        {
            // this is how we put comment inside jsx
        }
        {<Title />}
        {/* <h1>{title}</h1>
            <button className="title-btn" onClick={(e) => setTitle("New Food App")}>Change Title</button> */
        }
        <div className="nav-items">
            <ul>
                {/* Method - 1 */}
                {/* <Link to="/">
                    <li>Home</li>
                </Link> */}
                {/* Method - 2 */}
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                {/* <Link to="/contact">
                <li>Contact</li>
                </Link>
                <Link to="/cart">
                <li>Cart</li>
                </Link> */}
            </ul>
        </div>
        {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>) 
            : (
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )
        }
    </div>
  );
};
export default Header;
