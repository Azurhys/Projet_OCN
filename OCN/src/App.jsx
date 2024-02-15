import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="vh-100 container-fluid">
      <div className="container">
        <Outlet />
      </div>
    </div>
    
  )
}

export default App