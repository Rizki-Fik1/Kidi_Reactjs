import logo from './logo.svg';
import './App.css';
import Salam from './components/hello';
import Greetings from './components/cc';
import Febri from './components/Febri';
import Follow from './components/follow';
import Kucing from './Assets/kucing.jpg'

function App() {
  return (
    <div className="App">
      <Salam></Salam>
      <Greetings></Greetings>
      <Febri name="Kusuma Satria"></Febri>
      <Febri name="Aninda Felicia"></Febri>
      <Febri name="Waluyan Abdi"></Febri>
      <Follow></Follow>
      <br></br>
      <img src={Kucing}></img>
    </div>
  );
}

export default App;
