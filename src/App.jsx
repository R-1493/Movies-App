import Router from "./router/Router";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="dark:bg-gray-dark-main">
      <Router />
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
