
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.countReducer.count);
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;