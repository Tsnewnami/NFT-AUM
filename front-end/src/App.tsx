import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TTNormsPro from "./assets/fonts/TTNormsProRegular.otf";
import TTNormsProBold from "./assets/fonts/TTNormsProBold.otf";
import Footer from "./Footer/Footer";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    xxxl: true;
  }
}

const mytheme = createTheme({
  palette: {
    text: {
      primary: "#212529",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
      xxxl: 2560,
    },
  },
  typography: {
    fontFamily: ["TTNormsPro", "TTNormsProBold"].join(","),
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "TTNormsPro",
          fontStyle: "normal",
          fontDisplay: "swap",
          fontWeight: 500,
          src: `local('TTNormsPro'), url(${TTNormsPro}) format('truetype')`,
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
        },
        fallbacks: [
          {
            "@font-face": {
              fontFamily: "TTNormsProBold",
              fontStyle: "normal",
              fontDisplay: "swap",
              fontWeight: 400,
              src: `local('TTNormsProBold'), url(${TTNormsProBold}) format('truetype')`,
              unicodeRange:
                "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
            },
          },
        ],
        body: {
          background: "rgba(239, 239, 239, 1)",
        },
        "*": {
          scrollbarWidth: "thin",
          "::-webkit-scrollbar": {
            width: "6px" /* for Chrome, Safari, and Opera */,
          },
          "::-webkit-scrollbar-track": {
            backgroundColor: "black",
          },
          "::-webkit-scrollbar-thumb": {
            background: "#4e4e4e",
            borderRadius: "25px",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={mytheme}>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
