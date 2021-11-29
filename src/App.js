import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navigate from './components/Navigate';
import { setTodoList } from './store';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then((res) => res.json())
      .then((data) => dispatch(setTodoList([...data])));
  }, []);

  return (
    <div className="App">
      <Navigate />
    </div>
  );
}
export default App;
