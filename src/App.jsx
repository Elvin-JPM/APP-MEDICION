import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Meters from "./pages/Meters";
import Communications from "./pages/Communications";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="meters" element={<Meters />} />
            <Route path="communications" element={<Communications />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
