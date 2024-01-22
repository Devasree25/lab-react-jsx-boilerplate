import './App.css';

function App(props) {
  let { data } = props;
  // console.log(imageprops)
  console.log(props)
  return (
    <div>
      <h3>Kalvium Gallery</h3>
      {
        data.map((element) => {
          return <img id="image" src={element.img} />;
        })
      }
    </div>
  );
}

export default App;

