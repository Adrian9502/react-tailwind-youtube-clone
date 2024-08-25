import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import WatchVideo from "./pages/WatchVideo";
import { Routes, Route } from "react-router-dom";
import Searched from "./pages/Searched";
function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className="bg-zinc-900 min-h-screen">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <Header toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 transition-all ${
          isSidebarCollapsed ? "ml-16" : "ml-60"
        }`}
      >
        <Routes>
          <Route path="/" element={<Main isCollapse={isSidebarCollapsed} />} />
          <Route path="/watch/:id" element={<WatchVideo />} />
          <Route path="/searched/:query" element={<Searched />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
