import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dogs from "./components/dogs";

function App() {
  return (
    <Provider store={store}>
      <Dogs />
    </Provider>
  );
}

export default App;
