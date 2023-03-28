import './App.css';
import { Star } from 'react-awesome-shapes';

import {Home} from './components/Home';
import {Toolbar} from './components/Toolbar';

function App() {
  return (
      <div className="App">
          <div className="background">
              <BuildStars />
          </div>
          <Toolbar/>
          <Home/>
      </div>
  );
}

function BuildStars() {
    let RandomY, RandomX, RandomSize;
    const stars = [];

    for (let i = 0; i < 500; i++) {
        RandomY = Math.floor(Math.random()* window.innerHeight).toString() + "px";
        RandomX = Math.floor(Math.random()* window.innerWidth).toString() + "px";
        RandomSize = Math.floor((Math.random()*5) + 5).toString() + "px";

        stars.push(
            <Star
                position="fixed"
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
