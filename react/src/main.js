import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ParkShow from './containers/ParkShow';

$(function() {
  let appDiv = document.getElementById('app')
  let id = appDiv.dataset.id
  ReactDOM.render(
    <ParkShow id={id}/>,
    appDiv
  );
});
