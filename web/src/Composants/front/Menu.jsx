import { NavLink, useNavigate } from "react-router-dom";

const Menu = () => {const navigate = useNavigate()
    const handleLogout = (e) => {
        e.preventDefault();
        logout()
        navigate("/login")
    }
    return ( 
        <div className="bg-dark mb-3">
            <nav className="navbar navbar-expand navbar-light container">
                <span className="navbar-brand fs-3 text-light">
                    OCN
                </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className={({isActive}) => {
                            return isActive ? "nav-link active text-light" : "nav-link text-secondary"
                        }}>Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/poomsae" className={({isActive}) => {
                            return isActive ? "nav-link active text-light" : "nav-link text-secondary"
                        }}>Poomsae</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/kibon" className={({isActive}) => {
                            return isActive ? "nav-link active text-light" : "nav-link text-secondary"
                        }}>Kibon</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/theorie" className={({isActive}) => {
                            return isActive ? "nav-link active text-light" : "nav-link text-secondary"
                        }}>Theorie</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/evaluation" className={({isActive}) => {
                            return isActive ? "nav-link active text-light" : "nav-link text-secondary"
                        }}>Evaluation</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Menu;