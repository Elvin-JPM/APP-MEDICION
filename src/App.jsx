import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Meters from "./pages/Meters";
import Communications from "./pages/Communications";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="meters" element={<Meters />} />
          <Route path="communications" element={<Communications />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
