import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const Planet = () => {

    const { store, dispatch } = useGlobalReducer()
    const { planets } = store
    const worlds = async () => {
        const responsive = await fetch("https://www.swapi.tech/api/planets")
        const data = await responsive.json()

        dispatch({
            type: 'get_planet',
            payload: data.results
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
                            <img src="imagen.jpg" alt="Imagen de la tarjeta"></img>
                            <div class="card-content"></div>
                            <h3>{planet.name}</h3>
                            <p>Contenido de la tarjeta</p>
                        </div>

                    )

                })
            }
        </div>
    )
}