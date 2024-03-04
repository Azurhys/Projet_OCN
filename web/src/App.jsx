import { Outlet } from "react-router-dom";
import { getDatabase, ref, child, get } from "firebase/database";



function App() {
 

  return (
    <div className="vh-100 container-fluid m-0 p-0">
      
        <Outlet />
      
    </div>
    
  )
}

export default App