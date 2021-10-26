import { useState } from 'react';
import './styles.css';

export * as number from './test';

const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
 episodeOne: 1,
 twoJediWalkIntoACantina: 2,
 lukeSkywalker,
 episodeThree: 3,
 mayTheFourth: 4,
 anakinSkywalker,
};
console.log(obj);

export default function App() {
 const [count, setCount] = useState(0);
 if (count) console.log(123);
 return (
  <div className="App">
   <h1 onClick={() => setCount(count + 1)}>Hello CodeSandbox</h1>
   <h2>Start editing to see some magic happen!</h2>
  </div>
 );
}
