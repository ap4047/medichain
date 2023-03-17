
import './App.css';
import Home from './components/Home';
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import AddDoctor from './components/AddDoctor';
import AddPatient from './components/AddPatient';
import AddRecord from './components/AddRecord';
import Login from './components/Login';
// import { Switch } from 'react-router-dom';
function App() {
  return (
    <>
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/adddoctor" component={AddDoctor}/>
        <Route exact path="/addpatient" component={AddPatient}/>
        <Route exact path="/addrecord" component={AddRecord}/>
        <Route exact path="/login" component={Login}/>
        </Switch>
        
     
    </>
  );
}

export default App;
