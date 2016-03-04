"use strict";

var React = require('react');
var Square = require('./Square');
var Piece = require('./Piece');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');


var Board = React.createClass({


	render: function () {
    var buttons = [];

    for (var i = 0; i < 64; i++) {
      buttons.push(this.renderButton(i));
    }

    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {buttons}
      </div>
    );
  },

   renderButton: function (k) {
    var i = Math.floor(k / 8);
    var j = k % 8; 
    if((i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0)){
      return (
        <Square colour = 'black' count = {k}></Square>
        );
    }
    else{
		return (
			<Square colour = 'white' count = {k}></Square>
    );
    }
  }
});


module.exports = DragDropContext(HTML5Backend)(Board);