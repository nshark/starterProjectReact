import {Link} from "react-router-dom";

export default function LandingPage (){
    return (
        <div>
            <audio controls>
                <source src={"01-White-Noise-10min.mp3"} type={"audio/mp3"}/>
            </audio>
            <h1>Noah's React Website</h1>
            <h1>Hi. This is written in REACT.</h1>
            <h4><Link to={"/css-example"}>This Links to a CSS Example</Link></h4>
            <h4><Link to={"/tv-shows"}>This Links to the tv shows</Link></h4>
            <h4><Link to={"/sentance"}>This links to the sentance page</Link></h4>
            <h4><Link to={"/shop"}>This links to the shopping list and form</Link></h4>
            <h4><a href={"https://en.wikipedia.org/wiki/special:random"}>Random wikipedia page</a></h4>
            <h4><img src={"tutormilton.png"} alt={"Tutor Milton"}></img></h4>
        </div>
    );
}