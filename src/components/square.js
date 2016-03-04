"use strict";

var React = require('react');
var Piece = require('./Piece');	
var DropTarget = require('react-dnd').DropTarget;
var ItemTypes = require('./constants').ItemTypes;
var piecePosition = 6;

var canMakeMove = function(currentPosition,futurePosition){
	var iCurr = Math.floor(currentPosition / 8);
	var jCurr = currentPosition % 8;
	var iFuture = Math.floor(futurePosition / 8); 
	var jFuture = futurePosition % 8;

	if(Math.abs(iCurr - iFuture) === 2 && Math.abs(jCurr - jFuture) === 1){
		return true;
	}
	if(Math.abs(iCurr - iFuture) === 1 && Math.abs(jCurr - jFuture) === 2){
		return true;
	}
	return false;
}

var movePiece = function(k){
	piecePosition = k;
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

var squareTarget = {
  drop: function (props, monitor) {
  	//window.alert(props.count);
    movePiece(props.count);
  }
};

var Square = React.createClass({
	render: function () {
		var connectDropTarget = this.props.connectDropTarget;
		var colour = this.props.colour;
		var squareCoord = this.props.count;
		
    	if(squareCoord === piecePosition) {
    		piecePosition = -1;
    		return(
    		connectDropTarget(
        		<button key={squareCoord} type="button" style={{ width:'12.5%', height:'12.5%', color: 'blue',  backgroundColor:colour}}><Piece/></button>
      		)
		);
    	}
    	else{ 
    		return(
    		connectDropTarget(<button key={squareCoord} type="button" style={{ width:'12.5%', height:'12.5%', color: colour, backgroundColor:colour}}><p>.</p></button>
      		));
    	}
    		
  }

	
});
module.exports = DropTarget(ItemTypes.PIECE, squareTarget, collect)(Square);