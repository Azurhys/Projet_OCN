import Belt from "../back/Belt";
import useKibon from '../../hooks/useKibons'
import Menu from "./Menu";

const Kibon = () => {
    const data = useKibon();
    return ( <div>
                <Menu />
                <h1>Données de l'index Kibon :</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div> );
}
 
export default Kibon;