import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Accordion from './Components2/Accordion';
import Form from './Components/Form';
import Temp from './ComponentTemp/Temp';



function App() {
  return (
    <div >
    <BrowserRouter>
    <Switch>
    <Route exact path="/form" component={Form} ></Route>
    <Route exact path="/accordion" component={Accordion} ></Route>
    <Route exact path="/temp" component={Temp} ></Route>
   </Switch>
   </BrowserRouter>
    </div>
  );
}

export default App;
