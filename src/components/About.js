import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionComponent from "./Profile"
import React from "react";
// Method - 1 : we can use Profile component  using Outlet
// Method -2 : we can directly use Profile Component
// const About = () => {
//     return (
//         <div>
//             <h1>About Us Page</h1>
//             <p>This is React Course</p>
//             {/* <Outlet /> */}
//             <ProfileFunctionComponent name={"Neeraj"}/>
//             <Profile 
//                 name={"Neeraj-class"}
//                 surname={"chaudhary-class"}
//             />
            
//         </div>
//     );
// }

// class comp equivalent of functional compo

class About extends React.Component {
    constructor(props){
        super(props);
        
        console.log("Parent - constructor");
    }

    componentDidMount() {
        // Best place to make an API call
        console.log("Parent - componentDidMount");
    }
    render() {
        console.log("Parent - render");
        return (
            <div>
                <h1>About Us Page</h1>
                <p>This is React Course</p>
                <ProfileFunctionComponent 
                    name={"Neeraj"}
                />
                {/* <Profile 
                    name={"Neeraj-class"}
                    surname={"chaudhary-class"}
                /> */}
                
            </div>
        )
    }
}
export default About;