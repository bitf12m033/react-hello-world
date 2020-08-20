import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
function Room()
{
    const [isLit, setLit] = React.useState(true);
    const [temp, setTemp] = React.useState(72);
    const brightness = isLit ? "lit" : "dark";
    return(
        <div className={`room ${brightness}`}> The room is {isLit ? 'lit' : 'dark'}
            <br />
            <div>

            <p>Temperatuer <sup>o</sup>F : <strong>{temp}</strong> </p>
            <button onClick={() => setTemp(temp+1)}>
                +
            </button>
            <button onClick={() => setTemp(temp-1)}>
                -
            </button>
            </div>
            <button onClick={() => setLit(!isLit)}>
                flip
            </button>
            <button onClick={() => setLit(isLit?isLit:!isLit)}>
                ON
            </button>
            <button onClick={() => setLit(isLit?!isLit:isLit)}>
                OFF
            </button>
        </div>
    );
}

ReactDOM.render(<Room/>,document.querySelector('#root'));