"use strict";

var React = require('react');

var Home = require('./components/home');
var Board = require('./components/board');
//react component followed by DOM element that i want to attach it to
React.render(<Home />, document.getElementById('app'));
React.render(<Board />, document.getElementById('board'));