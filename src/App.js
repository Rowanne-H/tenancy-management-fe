import Home from './Home';
import Tenants from './Tenants';
import './App.css';


function App() {
  const tenants =[{
    id: 1, ref: "123John", fname: "John", lname: "Ou", address: "123 gogo", mobile: "0403123456", email:"1@gmail.com", note:""
  }]
  return (
    <div className="App">
      <Home />
      <Tenants  />
    </div>
  );
}

export default App;
