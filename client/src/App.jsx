import { useMemo, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { Box, useMediaQuery } from "@mui/material";
import { BrowserRouter,Navigate, Routes, Route } from "react-router-dom";
import Dashboard from "./scences/Dashboard";
import Products from "./scences/Products";
import Layout from './scences/Layout'
import Customers from './scences/Customers'
import Transactions from './scences/Transactions'
import Geography from './scences/Geography'
import Overview from './scences/Overview'
import Daily from './scences/Daily'
import  Monthly from './scences/Monthly'
import  Breakdown from './scences/Breakdown'
import  Admin from './scences/Admin'
import  Performance from './scences/Performance'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// import 'App.css'

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
       
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route element={<Layout/>}>
                <Route path="/" element={<Navigate to="/dashboard" replace/>} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Customers" element={<Customers />} />
                <Route path="/Transactions" element={<Transactions />} />
                <Route path="/Geography" element={<Geography />} />
                <Route path="/Overview" element={<Overview />} />
                <Route path="/Daily" element={<Daily />} />
                <Route path="/Monthly" element={<Monthly />} />
                <Route path="/Breakdown" element={<Breakdown />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path="/Performance" element={<Performance />} />
              </Route>
              {/* <Route path="/" element={<Dashboard />} /> */}
            </Routes>
          </ThemeProvider>
        {/* </Box> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
