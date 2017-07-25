import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ParkShow from './containers/ParkShow';

$(function() {
  let appDiv = document.getElementById('app')
  let parkId = appDiv.dataset.park_id
  let userId = appDiv.dataset.user_id
  ReactDOM.render(
    <ParkShow parkId={parkId} userId={userId}/>,
    appDiv
  );
});
