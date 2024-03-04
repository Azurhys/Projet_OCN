import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="vh-100 container-fluid m-0 p-0">
      
        <Outlet />
      
    </div>
    
  )
}

export default App