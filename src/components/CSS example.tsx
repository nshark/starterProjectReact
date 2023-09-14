import "./cssexample.css"
import {Link} from "react-router-dom";
export default function CSSExample(){
    return(
      <div className={"headerCSS"}>
          This is styled in CSS.
          <div>
              <h1 className={"spinnyText"}><Link to={"/"}>This Is Spinning</Link></h1>
          </div>
      </div>
    );
}