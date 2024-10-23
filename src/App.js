import { Routes, Route } from "react-router-dom";

import AppHeader from "./components/AppHeader/AppHeader";
import AppLogin from "./components/AppLogin/AppLogin";
import HomePage from "./components/HomePage/HomePage";
import TempAndExmpls from "./components/TempAndExmpls/TempAndExmpls";
import AboutAvPage from "./components/AboutAvPage/AboutAvPage";
import AppContactsUs from "./components/AppContactsUs/AppContactsUs";
import "./App.css";

function App() {
  return (
    <div className="main">
      <AppHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AppLogin />} />
        <Route path="/examples" element={<TempAndExmpls />} />
        <Route path="/aboutAV" element={<AboutAvPage />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/contacts" element={<AppContactsUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
