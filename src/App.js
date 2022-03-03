import "./App.css";
import UserList from "./Components/UserList";
import Navigation from './Components/Navigation';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';

function App() {
    return (
        <div className="App">
            <Navigation />
            <h3>Hello from ws API</h3>
           
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/userlist" element={ <UserList />}/>
            </Routes>
        </div>
    );
}

export default App;
