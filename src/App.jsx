import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Collection from './routes/Collection'
import Home from "./routes/Home";
import Root from "./routes/Root";
import Login from "./routes/Login";
import Register from "./routes/Register";
import EditorPage from "./routes/EditorPage";
import Calendar from "./routes/Calendar";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./routes/Dashboard";
import About from "./components/footercomponent/About";
import Contact from "./components/Contact";
import Licensing from "./components/footercomponent/Licensing";
import Privacy from "./components/footercomponent/Privacy";
import Premium from "./components/Premium";
import EditorPageV2 from "./routes/EditorPageV2";
import { Provider } from "react-redux";
import store from "./store/store";
import ProtectedRoute from "./auth/ProtectedRoute";
import Cookies from "./components/footercomponent/Cookies";
import CalendarPreview from "./routes/CalendarPreview";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/theme/ThemeContext";
import Shareable from "./routes/Shareable"
import Terms from "./components/footercomponent/Terms";
import Faq from "./components/footercomponent/Faq";
function App() {

  return (
    <ThemeProvider initialTheme={'light'} >
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />

              <Route
                path="/collection"

                element={<Collection />
                }
              />
              <Route
                path="/editorPage"
                element={
                  <EditorPage />
                }
              />
              <Route
                path="/editorPageV2"
                element={<ProtectedRoute component={EditorPageV2} />}
              />
              <Route
                path="/calendar"
                element={
                  <Calendar />
                }
              />
              <Route
                path="/calendar/:id"
                element={
                  <CalendarPreview />
                }
              />
              <Route
                path="/collection"
                element={<ProtectedRoute component={Collection} />}
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute component={Dashboard} />
                }
              />
              <Route
                path="/about"
                element={
                  <About />
                }
              />
              <Route
                path="/contact"
                element={
                  <Contact />
                }
              />
              <Route 
                path="/faq"
                element={
                  <Faq />
                }
              />
              <Route
                path="/licensing"
                element={
                  <Licensing />
                }
              />
              <Route
                path="/privacy"
                element={
                  <Privacy />
                }
              />
              <Route
                path="/cookies"
                element={
                  <Cookies />
                }
              />
              <Route
                path="/terms"
                element={
                  <Terms />
                } 
              />

              <Route
                path="/premium"
                element={
                  <Premium />
                }
              />
              <Route
                path="/collection"
                element={
                  <Collection />
                }
              />
              <Route
                path="/shareable/:id" component={Shareable}
                element={
                  <Shareable />
                }
              />
            </Route>
            <Route path="/" element={<Footer />} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  )
}

export default App
