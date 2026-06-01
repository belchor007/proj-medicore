  import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import DashboardAdmin from "../pages/DashboardAdmin";
import DashboardMedico from "../pages/DashboardMedico";
import DashboardRecepcao from "../pages/DashboardRecepcao";
import DashboardFinanceiro from "../pages/DashboardFinanceiro";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/admin" element={<DashboardAdmin />} />

        <Route path="/medico" element={<DashboardMedico />} />

        <Route path="/recepcao" element={<DashboardRecepcao />} />

        <Route path="/financeiro" element={<DashboardFinanceiro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;