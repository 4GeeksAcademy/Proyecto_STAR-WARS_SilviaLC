import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const Planet = () => {

    const { store, dispatch } = useGlobalReducer()
    const { planets, favorites } = store
    const worlds = async () => {
        const responsive = await fetch("https://www.swapi.tech/api/planets")
        const data = await responsive.json()

        dispatch({
            type: 'get_planet',
            payload: data.results
        })
    }

    const addfavorites = (data) => {
        dispatch({
            type: 'get_favorite',
            payload: data
        })
    }

    const deleted = (uid) => {
        dispatch({
            type: 'delete_favorite',
            payload: uid
        })
    }


    useEffect(() => {
        worlds()
    }, [])

    return (
        <div className="row flex-row flex-nowrap overflow-auto">
            {
                planets.map((planet, index) => {
                    return (
                        <div class="card" key={index} >
                            <img src="https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190928214307" alt="Imagen de la tarjeta"></img>
                            <div class="card-content">
                                <h3>{planet.name}</h3>
                                <p></p>
                            </div>


                            <div className="d-flex justify-content-center">
                                <button
                                    className="btn btn-sm btn-info me-2"
                                    onClick={() => addfavorites(character)}
                                >
                                    Añadir a favoritos
                                </button>
                              
                            </div>
                        </div>

                    )
 } )}
            </div>

                )
            }