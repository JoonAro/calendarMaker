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
function App() {

  return (
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
            path="/calendar"
            element={
              <Calendar />
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard/>
            }
          />

        </Route>
      </Routes>
    </Router>
  )
}

export default App
