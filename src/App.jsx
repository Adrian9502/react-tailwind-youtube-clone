import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className="bg-zinc-800 min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <Main className={isSidebarCollapsed ? "ml-20" : "ml-60"} />
    </div>
  );
}

export default App;
