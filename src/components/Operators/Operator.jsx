import React, { useState, useEffect } from 'react'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import "./operator.css"

const operator = () => {
  const [char, setChar] = useState("");
  const [prevAns, setPrevAns] = useState("");
  const operands = ['%', '/', '*', '+', '-', '.'];

  //updating what we click
  const handleClick = (e) => {
    //no more same operand
    if (  operands.includes(e.target.name) && char === "" ||
          operands.includes(e.target.name) && operands.includes(char.slice(-1))     
    ) {
      return;
    }
    setChar(char.concat(e.target.name));
  }

  const clear = () => {
    setChar("");
    setPrevAns("");
  }

  const backspace = () => {
    setChar(char.slice(0, char.length - 1))
  }

  const calculate = (e) => {
    //no ending with operators while calculating
    if (  
      operands.includes(char.substr(char.length - 1))      
    ) {
      return;
    }
    setChar(eval(char).toString());
    setPrevAns (eval(char).toString()) 
  }

 
  return (
    <section className='operator'>
      <div className='box'>
        <div className='resultBox'>
          <div className='prevResult'>{prevAns}</div>
          {char ? <div className='currentResult'>{char}</div> :
            <div className='currentResult'>0</div>
          }
          
        </div>

        <div className='buttonBox'>
            <button id='ac' onClick={clear}>AC</button>
            <button id="backspace" onClick={backspace}><BackspaceOutlinedIcon /></button>
            <button name="%" onClick={handleClick}>%</button>
            <button name="/" onClick={handleClick}>/</button>

            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button name="*" onClick={handleClick}>*</button>

            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="-" onClick={handleClick}>-</button>

            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button name="+" onClick={handleClick}>+</button>

            <button name="0" onClick={handleClick}>0</button>
            <button name="." onClick={handleClick}>.</button>
            <button name="=" onClick={calculate}  className='equalCol'>=</button>
        </div>
      </div>
    </section>
  )
}

export default operator