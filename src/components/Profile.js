import {useState} from "react";
import { useEffect } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    // same setInterval case in functional component
    // we can return a function which called while unmouting
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Namaste React");
        }, 1000);
        return () => {
            clearInterval(timer);
            console.log("useEffect return");
        }
    }, []);

    return (
        <div>
            <h2>Profile Functioncal Comp</h2>
            <h3>Name: {props.name}</h3>
            <h4>Count: {count}</h4>
            <h4>Count1: {count2}</h4>
            <button onClick={() => {
                setCount(1);
                setCount2(2);
            }}>Count</button>
        </div>
    )
}

export default Profile;