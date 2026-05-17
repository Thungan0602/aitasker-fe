import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./pages/404/404";
import Marketplace from "./pages/public/Marketplace";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import JobDetail from "./pages/public/JobDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="*" element={<Error404 />} />


      </Routes>
    </BrowserRouter>
  );
}