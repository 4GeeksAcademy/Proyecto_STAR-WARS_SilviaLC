import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";



export const Character = () => {

    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()
    const { characters, favorites } = store
    const people = async () => {
        const responsive = await fetch("https://www.swapi.tech/api/people")
        const data = await responsive.json()
        dispatch({
            type: 'get_character',
            payload: data.results
        })

    }
    const detalles = (uid) => {
        navigate(`/DetallesPersonaje/${uid}`)
    }

    const addfavorites = (data) => {
        dispatch({
            type: 'get_favorite',
            payload: data
        })
    }

    const deleted = (uid) => {
        dispatch({
            type:'delete_favorite',
            payload: uid
        })
    }

console.log(favorites)

    useEffect(() => {
        people()
    }, [])

    return (

        <div className="row flex-row flex-nowrap overflow-auto">
            {
                characters.map((character, index) => {
                    return (
                        <div class="card" key={index} >
                            <img onClick={() => detalles(character.uid)} src="imagen.jpg" alt="Imagen de la tarjeta"></img>
                            <div class="card-content">
                                <h3>{character.name}</h3>
                                <p>Contenido de la tarjeta.</p>
                            </div>

                            <button onClick={() => addfavorites(character)}>

                            </button>

                            <button onClick={()=>deleted(favorite.uid)}>

                            </button>


                        </div>

                    )
                })
            }
        </div >

    )
}