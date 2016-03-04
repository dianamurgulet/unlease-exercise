"use strict";
var React = require('react');
var DragSource = require('react-dnd').DragSource;
var ItemTypes = require('./constants').ItemTypes;
var PropTypes = React.PropTypes;

var pieceSource = {
  beginDrag: function (props) {
    return {
      
    };
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()

  };
}

var Piece = React.createClass({

	propTypes: {
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired
  	},
	render: function () {
    var isDragging = this.props.isDragging;
    var connectDragSource = this.props.connectDragSource;
    

    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1, fontSize: 25, cursor: 'move' }}>
        O
      </div>
    );
  }
});
module.exports = DragSource(ItemTypes.PIECE, pieceSource, collect)(Piece);