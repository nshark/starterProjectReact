import {Link} from "react-router-dom";

export default function TvShows (){
    return(
        <div>
      <table className={"table"}>
          <tr className={"tableRow"}>
              <th>Rick And Morty</th>
              <th>Sci-fi</th>
              <th>A number</th>
          </tr>
          <tr className={"tableRow"}>
              <th>I hate TV shows</th>
              <th>No Genre</th>
              <th>Too Many</th>
          </tr>
          <tr className={"tableRow"}>
              <th>I hate TV shows</th>
              <th>No Genre</th>
              <th>Too Many</th>
          </tr>
      </table>
    <h1><Link to={"/"}>Return to home</Link></h1></div>
    );
}