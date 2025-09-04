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
           
           
      <p>name</p>
      <p>gender</p>
      <p>skin_color":</p>
      <p>hair_color":</p>
      <p>height":</p>
      <p>eye_color":</p>
      <p>mass":</p>
      <p>homeworld": "https://www.swapi.tech/api/planets/1",</p>
      <p>birth_year"</p>
      <p>vehicles": [
        "https://www.swapi.tech/api/vehicles/14",
        "https://www.swapi.tech/api/vehicles/30"
      ],</p>
      <p>starships": [
        "https://www.swapi.tech/api/starships/12",
        "https://www.swapi.tech/api/starships/22"
      ],</p>
      <p>films": [
        "https://www.swapi.tech/api/films/1",
        "https://www.swapi.tech/api/films/2",
        "https://www.swapi.tech/api/films/3",
        "https://www.swapi.tech/api/films/6"
      ],</p>
      <p>url": "https://www.swapi.tech/api/people/1"</p>
        </div>

    )
}

