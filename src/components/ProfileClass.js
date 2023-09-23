import React from "react";

class Profile extends React.Component{

    constructor(props){
        super(props);
        //create state
        this.state = {
            userInfo: {
                name: "Dummy name",
                location: "Dummy Location"
            }
        };
        console.log("Child - constructor");
    }

    async componentDidMount() {
        // Best place to make an API call

        // const data  = await fetch("https://api.github.com/users/naspnrd");
        // const jsonData = await data.json();
        // console.log({jsonData})
        // this.setState({
        //     userInfo: jsonData
        // })

        // setInterval
        // this Namaste React will keep printing each if I move to new component as 
        // REACT is SPA , it does not reload the page, it just mount the component
        // so this timer will keep on running but if I move back to this comp again
        // 2 timer will start and so on
        // setInterval(() => {
        //     console.log("Namaste React");
        // }, 1000);

        // solution is clear the interval when unmounting

        this.timer = setInterval(() => {
            console.log("Namaste React");
        }, 1000);

        console.log("Child - componentDidMount");
    }

    componentDidUpdate() {
        console.log("component Did Update");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("component Will Unmount")
    }
    // render method returns some JSX and
    // it's the only mandatory function required
    render(){
        console.log("Child - render");
        return (
            <div>
                <h1>Profile class component</h1>
                <img src={this.state?.userInfo?.avatar_url} />
                <h2>Name: {this.state?.userInfo?.name}</h2>
                <h3>location: {this.state?.userInfo?.location}</h3>
            </div>
        )
    }

}

export default Profile