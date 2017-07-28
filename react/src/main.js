import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ParkShow from './containers/ParkShow';
import ParkFormContainer from './containers/ParkFormContainer'

$(function() {
  let appDiv = document.getElementById('app')

  if(appDiv){
  let parkId = appDiv.dataset.park_id
  let userId = appDiv.dataset.user_id

  ReactDOM.render(
    <ParkShow parkId={parkId} userId={userId}/>,
    appDiv
  );
}
else {
  ReactDOM.render(
    <ParkFormContainer />,
    document.getElementById('form')
  );
}

});
