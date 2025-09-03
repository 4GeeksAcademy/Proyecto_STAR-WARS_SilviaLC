import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

export const DetallesPersonaje = () => {

    const { uid } = useParams()
    const [detalles, setDetalles] = useState([])
    console.log(uid)
    const detallesPersonaje = async () => {
        const responsive = await fetch(`https://swapi.info/api/people/${uid}`)
        const data = await responsive.json()
        setDetalles(data)

    }
console.log (detalles)
    useEffect(() => {
        detallesPersonaje()

    }, [])




    return (
        <div>
           
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>

    )
}

