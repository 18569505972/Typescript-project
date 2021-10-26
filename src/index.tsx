import { render } from 'react-dom';

import App, { number } from './App'

console.log(number.default, number.a)

const rootElement = document.getElementById('root');
render(<App />, rootElement);
