import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./pages/main/Main";
import Order from "./pages/order/Order";
import Finish from "./pages/finish/Finish";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/order" element={<Order />} />
          <Route path="/finish" element={<Finish />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
