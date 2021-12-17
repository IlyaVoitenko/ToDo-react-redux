import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navigate from "./components/Navigate";
import { setTodoList } from "./store/actionCreators";
import { getTodos } from "./components/API";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos().then((res) => {
      dispatch(setTodoList([...res.data]));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Navigate />
    </div>
  );
}
export default App;
