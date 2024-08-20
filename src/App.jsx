import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-zinc-800 min-h-screen">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
