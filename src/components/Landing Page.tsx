import {Link} from "react-router-dom";

export default function LandingPage (){
    return (
        <div>
            <h1>Noah's React Website</h1>
            <h1>Hi. This is written in REACT.</h1>
            <h4><Link to={"/css-example"}>This Links to a CSS Example</Link></h4>
            <h4><Link to={"/tv-shows"}>This Links to the tv shows</Link></h4>
            <h4><Link to={"/sentance"}>This links to the sentance page</Link></h4>
        </div>
    );
}