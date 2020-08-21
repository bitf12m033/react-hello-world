import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// function Hi(props) {
// function Hi({ name }) {
//   // return <div>Hello {props.name}!</div>;
//   return <div>Hello {name}!</div>;
// }
// const Hi = ({ name }) => {
//   return <div>Hello {name}!</div>;
// }
// Plain function:
// function Hi({ name }) {
//   return <div>Hello {name}!</div>;
// }

// A constant holding an anonymous function:
// const Hi = function({ name }) {
//   return <div>Hello {name}!</div>;
// }

// Turning the "function" into an arrow:
// const Hi = ({ name }) => {
//   return <div>Hello {name}!</div>;
// }

// Optional step 3: Removing the braces, which makes the
// "return" implicit so we can remove that too. Leaving the parens
// in for readability:
const Hi = ({ name }) => (
  <div className="custom-div">Hello <strong>{name}</strong>!
    <ol>
      <li>Umer</li>
      <li>Zeeshan</li>
      <li>Zia</li>
      </ol>
      {5 + 10}
  </div>
)

// Optional step 4: If the component is really short, you can put
// it all on one line, and skip the parentheses:
// const Hi = ({ name }) => <div>Hello  <strong>{name}</strong>!</div>;



ReactDOM.render(<Hi name="Umer"/>, document.querySelector('#root'));