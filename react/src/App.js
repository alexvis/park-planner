import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from '../components/NavBar'


const App = (props) => {
  return(
   <Router history={browserHistory}>
     <Route path='/' component={NavBar} >
       <IndexRoute component={}/>
       <Route path='/' component={}/>
       <Route path='/' component={}/>
     </Route>
   </Router>
 )
}

export default App;
