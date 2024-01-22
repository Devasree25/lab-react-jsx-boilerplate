import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  render(){
    let imgarray = this.props.imageprop
  

  return(
    <div>
      <h3>Kalvium Gallary</h3>
     {
        imgarray.map((element) => {
          return <img id="image"src={element.img} />

          
        })};
      </div>
    )
}
}
