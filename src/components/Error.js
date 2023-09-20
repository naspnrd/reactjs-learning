import page_not_found from "../assets/img/page_not_found.png";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log({ error });
    return (
        <div>
            <h1>Opps!!</h1>
            <h2>Something went wrong!!</h2>
            <h2>{error.status + " : " + error.statusText}</h2>
            <img alt="404 page not found" src={page_not_found}/>
        </div>
    )
}

export default Error;