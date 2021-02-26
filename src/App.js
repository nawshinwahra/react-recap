import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayoks] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))

  }, [])

  // const nayoks =[{name:'Jasim',age:56}, {name:'Shakib',age:44}, {name:'Bapparaj',age:30}, {name:'Deepjol',age:77}, {name:'Shuvo', age:30}];
  return (
    <div className="App">
    <MovieCounter></MovieCounter>
    {
      nayoks.map(nayok => <Nayok name={nayok.name} key ={nayok.id}></Nayok>)
    }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
function Nayok(props) {

  const nayokStyle={
   border:'2px solid yellow',
   margin:'20px',
   
  
  }
  return (
      <div style={nayokStyle}>
        <h1>Ami Nayak:{props.name}</h1>
        <h3>I have done 5 movies</h3>
      </div>
  );
}
function MovieCounter() {
  const [count, setCount] = useState(5);
  // console.log(result)
  const handelClick = () => setCount(count + 1);
  return(
    <div>
     <button onClick={handelClick} >Add Movie Counter</button>
     <h5>Number of Movies:{count}</h5>
     <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
  
}
function MovieDisplay(props) {
  return <h4>Movies I have acted:{props.movies} </h4>
  
}

export default App;
