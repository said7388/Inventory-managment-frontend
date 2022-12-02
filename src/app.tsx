import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllPage from "./pages/all-page";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <AllPage />
        </Router>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
