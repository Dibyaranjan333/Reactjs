import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/board';
import { observe } from './components/game';
const rootEl = document.getElementById('root');
observe(knightPosition => ReactDOM.render(<Board knightPosition={knightPosition} />, rootEl));
