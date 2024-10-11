import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader/AppHeader";
import AppLogin from "./components/AppLogin/AppLogin";
import HomePage from "./components/HomePage/HomePage";
import TempAndExmpls from "./components/TempAndExmpls/TempAndExmpls";

function App() {
  return (
    <div className="main">
      <AppHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/login" element={<AppLogin />} />
        <Route path="/examples" element={<TempAndExmpls />} />
      </Routes>
    </div>
  );
}

export default App;
