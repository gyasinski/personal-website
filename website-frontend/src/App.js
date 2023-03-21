import './App.css';
import { Star } from 'react-awesome-shapes';

function App() {
  return (
      <div className="App">
          <BuildStars />
          <div className="toolBar">
              <div className="toolButtons">
                  <button className="toolButton" type="button">Experience</button>
                  <button className="toolButton" type="button">Projects</button>
                  <button className="toolButton" type="button">Contact Me</button>
              </div>
          </div>
          <div className="square">
            <h1>Hello, my name is Greg</h1>
          </div>
      </div>
  );
}

function BuildStars() {
    let RandomY, RandomX, RandomSize;
    const stars = [];

    for (let i = 0; i < 1000; i++) {
        RandomY = Math.floor(Math.random()* window.innerHeight).toString() + "px";
        RandomX = Math.floor(Math.random()* window.innerWidth).toString() + "px";
        RandomSize = Math.floor((Math.random()*5) + 5).toString() + "px";

        stars.push(
            <Star
                color="#FFFFFF"
                size={RandomSize}
                top={RandomY}
                left={RandomX}
                zIndex={0}
            />
        )
    }
    return (stars)
}

export default App;
