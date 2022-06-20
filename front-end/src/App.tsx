import { CssBaseline } from "@mui/material";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer/Footer";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <CssBaseline />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Router basename={"/"}>
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<div>loading</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <div style={{ minHeight: "100vh" }}>
                <Suspense fallback={<div>loading</div>}>
                  <HomePage />
                </Suspense>
              </div>
            }
          />
          <Route
            path="dashboard"
            element={
              <div>
                <Suspense fallback={<div>loading</div>}>
                  <Dashboard />
                </Suspense>
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
