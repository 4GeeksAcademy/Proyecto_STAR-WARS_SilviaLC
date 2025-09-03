import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const Vehicle = () => {

    const { store, dispatch } = useGlobalReducer()
    const { vehicles } = store
    const ships = async () => {
        const responsive = await fetch("https://www.swapi.tech/api/vehicles")
        const data = await responsive.json()

        dispatch({
            type: 'get_vehicle',
            payload: data.results
        })
    }

    useEffect(() => {
        ships()
    }, [])

    return (
        <div className="row flex-row flex-nowrap overflow-auto">
            {
                vehicles.map((vehicle, index) => {
                    return (
                        <div class="card" key={index} >
                            <img src="imagen.jpg" alt="Imagen de la tarjeta"></img>
                            <div class="card-content">
                                <h3>{vehicle.name}</h3>
                                <p>Contenido de la tarjeta</p>
                            </div>
                           
                        </div>
                    )
                })
            }
        </div>
    )





}