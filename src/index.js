import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/* const animals = ['cat', 'dog', 'mouse'];
const fruits = ['banana', 'apple', 'orange'];

console.log(animals);
console.log(fruits);

const newArr = ['cat', 'dog', ...fruits, 'mouse', ...fruits]
console.log(newArr);

const fullName = {
  fName: 'James',
  lName: 'Bond'
}
console.log(fullName);

const user = {
  ...fullName,
  id: 1,
  username: '007'
}
console.log(user);
 */