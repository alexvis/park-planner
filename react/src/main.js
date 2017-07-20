import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ParkShow from './containers/ParkShow';

$(function() {
  ReactDOM.render(
    <ParkShow />,
    document.getElementById('app')
  );
});
