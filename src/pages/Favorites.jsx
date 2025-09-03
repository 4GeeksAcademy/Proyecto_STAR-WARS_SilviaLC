import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";


export const Favorites = () => {

    const { store, dispatch } = useGlobalReducer()
    const { favorites } = store
    const navigate = useNavigate()


    const detalles = (uid) => {
        navigate(`/DetallesPersonaje/${uid}`)
    }

    const deleted = (uid) => {
        dispatch({
            type: 'delete_favorite',
            payload: uid
        })
    }
    return (


        <div className="row flex-row flex-nowrap overflow-auto">
            {
                favorites.map((favorite, index) => {
                    return (
                        <div class="card" key={index} >
                            <img onClick={() => detalles(favorite.uid)} src="imagen.jpg" alt="Imagen de la tarjeta"></img>
                            <div class="card-content">
                                <h3>{favorite.name}</h3>
                                <p>Contenido de la tarjeta.</p>
                            </div>

                            <button onClick={() => deleted(favorite.uid)}>

                            </button>


                        </div>

                    )
                })
            }
        </div >
    )
}
