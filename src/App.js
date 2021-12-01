import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navigate from "./components/Navigate";
import { setTodoList } from "./store";
import { getFetch } from "./components/API";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getFetch()
      .then((res) => res.json())
      .then((data) => {
        dispatch(setTodoList([...data]));
      });
  }, [dispatch]);

  return (
    <div className="App">
      <Navigate />
    </div>
  );
}
export default App;
