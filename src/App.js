import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import List from "./pages/List/List";
import Details from "./pages/Details/Details";


function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/item/:id" element={<Details />} />
        <Route path="/" element={<List />} />
      </Routes>
    </Provider>
  );
}

export default App;
