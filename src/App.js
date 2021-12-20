import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navigate from './components/Navigate';
import { getTodos } from './components/API';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigate />
    </div>
  );
}
export default App;
