import React, { useState } from 'react'
import "./operator.css"

const operator = () => {
  const [char, setChar] = useState("");
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
  }
  const backspace = () => {
    setChar(char.slice(0, char.length - 1))
  }

  const calculate = () => {
    setChar(eval(char).toString())
  }
  
  return (
    <section className='operator'>
      <div className='box'>
        <div className='resultBox'>
          <div className='prevResult'>{char}</div>
          {char ? <div className='currentResult'>{char}</div> :
            <div className='currentResult'>0</div>
          }
          
        </div>

        <div className='buttonBox'>
            <button id='ac' onClick={clear}>AC</button>
            <button id="backspace" onClick={backspace}>mi</button>
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