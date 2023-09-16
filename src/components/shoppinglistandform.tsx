import {Link} from "react-router-dom";

export default function Shoppinglistandform(){
    return(
        <div>
            <Link to={"/"}>Go back to home</Link>
            <form>
                Name:
                <input type={"text"}/>
                Class Name:
                <input type={"text"}/>
            </form>
            Do you like dropdowns?
            <select name={"Do you like dropdowns"}>
                <option value={"No"}>No</option>
                <option value={"No"}>VERY No</option>
            </select>
            <button onClick={() => {alert(new Date().toISOString())}}>Date and time</button>
            <h4>Shopping List</h4>
            <h5>Boredom</h5>
            <h5>Boredom</h5>
            <h5>Boredom</h5>

        </div>
    );
}