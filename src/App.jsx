import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  const image=imageData()
  return(
    <div>
    <h3>Kalvium Gallary</h3>
    <div className='parent'>{
      image.map(element => {
        return <div>
          <img id="image"src={element.img} />
        </div>
        
      })};
    </div>
    </div>
    )}

export default App;
