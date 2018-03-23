import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Knight from './knight';
import BoardSquare from './BoardSquare';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {moveKnight,canMoveKnight} from './game';
class Board extends Component {
    handleSquareClick(toX, toY) {
        if (canMoveKnight(toX, toY)) {
            moveKnight(toX, toY);
          }
      };
      renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        // console.log("x in board",x,y)
        return (
          <div key={i}
               style={{ width: '12.5%', height: '12.5%' }}>
            <BoardSquare x={x}
                         y={y}>
              {this.renderPiece(x, y)}
            </BoardSquare>
          </div>
        );
      }
      
renderPiece(x, y) {
  const [knightX, knightY] = this.props.knightPosition;
  if (x === knightX && y === knightY) {
    return <Knight />;
  }
  else {
    return <span>{x},{y}</span>
  }
}
  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }
    return (
      <div style={{ width: '100%', height: '100%',  display: 'flex',  flexWrap: 'wrap' }}>
        {squares}
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(Board);
Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};