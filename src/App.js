import routes from "./routes";
import { useRoutes } from "react-router-dom";

import TopBar from "./Components/TopBar/TopBar";
import Sidebar from "./Components/Sidebar/Sidebar";

import './App.css'

function App() {
  let router = useRoutes(routes);
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </div>
  );
}

export default App;
