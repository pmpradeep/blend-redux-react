
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  console.log(counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>React With Redux</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

   
    </div>
  );
}

export default App;
