import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'

import Frontpage from './frontpage/frontpage'
import Cursor from './cursor/cursor'
import Navbars from './navbar/navbar'
import Project from './projects/project'
function App() {
  return (
    <div>
    <BrowserRouter>
    {/* <Navbars></Navbars> */}
    <Cursor></Cursor>
   
    <Switch>
     <Route path={'/'} exact component={Frontpage}></Route>
     </Switch>
   </BrowserRouter>
   </div>
  );
}

export default App;
