import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function compute(x: number): {res: number, chain: number[]} {
  let res = x;
  let chain = [x];

  while (res !== 1) {    
    if (res % 2 === 0) { 
      // even
      res = res / 2;
    } else {
      // odd
      res = res*3 + 1;      
    }
    chain.push(res);
  }

  return {res : res, chain: chain};
  
}

function App() {
  const startingCandidate = 12;
  const [candidate, setCandidate] = useState(startingCandidate);
  const [x, setX] = useState({res: startingCandidate, chain: [startingCandidate]});

  return (
    <div>
      <h1>3x+1</h1>
      <input type="text" value={candidate} onChange={e => setCandidate(parseInt(e.target.value))}></input>
      <button onClick={() => setX(compute(candidate))}>go</button> 
      <p>Number of steps: {x.chain.length - 1}</p>     
      <p><ol>{x.chain.map(num => <li><span className="number-item">{num}</span></li>)}</ol></p>
    </div>

  );
}

export default App;
