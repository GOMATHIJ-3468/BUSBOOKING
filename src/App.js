import './App.css';
import Form from './Form/form';
import Delete from './Home/delete';
import Home from './Home/home';
import Search from './Home/search';
import Update from './Home/update';
import Createaccount from './login/createaccount';
import Getdetails from './login/getdetails';

import Signup from './login/signup';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

export default function App() {
  return (
    <div id="App">
    <BrowserRouter>
    <Link to='/sign'><img border="0" alt='' src="https://image.shutterstock.com/image-vector/black-simple-finger-presses-on-260nw-618096680.jpg" width="67" height="67"></img></Link>  
    <Link to='/create' id="link"><img border="0" alt=''  src="https://thumbs.dreamstime.com/b/login-icon-button-vector-illustration-isolated-white-background-127000355.jpg" width="67" height="67"></img></Link>
    <Link to='/form'><img border="0" alt=''  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8FQ5eR06GipDL_DD7_nAnJmVNL74F7Y28tw&usqp=CAU" width="67" height="67"></img></Link>
   
    <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/sign" element={<Signup/>}/>
        <Route exact path="/create" element={<Createaccount/>}/>
        <Route exact path="/form" element={<Form/>}/>
        <Route exact path="/search" element={<Search/>}/>
        <Route exact path="/getdetails" element={<Getdetails></Getdetails>}></Route>
        <Route exact path='/update' element={<Update></Update>}></Route>
        <Route exact path='/delete' element={<Delete></Delete>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
