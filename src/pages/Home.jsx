import { Character } from "../components/Characters.jsx";
import { Planet } from "../components/Planets.jsx";
import { Vehicle } from "../components/Vehicles.jsx";

export const Home = () => {



	return (
		<div className="bg-starwars text-center mt-5">
			<Character	/>
			<Vehicle	/>
			<Planet 	/>
			
		
		</div>
	);
}; 