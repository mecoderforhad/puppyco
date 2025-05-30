import Routes from "./routes";
import AuthProvider from "./provider/AuthProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ToastContainer />
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
