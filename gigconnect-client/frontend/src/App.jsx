import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PostProject from "./pages/PostProject";
import Projects from "./pages/Projects";
import ChatBox from "./components/ChatBox";  // ✅ Correct import
import ChatList from "./pages/ChatList";
import Gigs from "./pages/Gigs";
import MyAccount from "./pages/MyAccount";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/post-project"
            element={
              <ProtectedRoute>
                <PostProject />
              </ProtectedRoute>
            }
          />
          <Route
            path="/projects"
            element={
              <ProtectedRoute>
                <Projects />
              </ProtectedRoute>
            }
          />

          {/* ✅ Chats */}
          <Route
            path="/chat/:id"
            element={
              <ProtectedRoute>
                <ChatBox />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chats"
            element={
              <ProtectedRoute>
                <ChatList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/gigs"
            element={
              <ProtectedRoute>
                <Gigs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/myaccount"
            element={
              <ProtectedRoute>
                <MyAccount />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
