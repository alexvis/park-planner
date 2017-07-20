import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from '../components/NavBar'
import ParkShow from '../containers/ParkShow'

const App = (props) => {
  return(
   <Router history={browserHistory}>
     <Route path='/' component={NavBar} >
       <IndexRoute component={ParkShow}/>
       <Route path='/parks' component={ParkShow}/>
     </Route>
   </Router>
 )
}

export default App;
