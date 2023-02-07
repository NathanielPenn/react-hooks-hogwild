import React, {useState} from "react";
import Nav from "./Nav";
import HogCollection from "./HogCollection";
import HogFilter from "./HogFilter";
import HogForm from "./HogForm";

//////////DATA///////////
import hogs from "../porkers_data";

function App() {
	const [isGreased, setIsGreased] = useState(false);
	const filteredHogs = hogs.filter(hog => {return isGreased ? hog.greased : hogs})
	//console.log(filteredHogs)
	const [isSorted, setIsSorted] = useState("All");

	const sortedHogs = [...filteredHogs].sort((a, b) => {
		if (isSorted === "Name") {

		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
		} else if (isSorted === "Weight") {
			if (a.weight < b.weight) {
				return -1;
			}
			if (a.weight > b.weight)
				return 1;
		} 
		return 0;
	})
	
	return (
		<div className="App">
			<Nav />
			<HogForm />
			<HogFilter setIsGreased = {setIsGreased} setIsSorted = {setIsSorted}/>
			<HogCollection hogs = {sortedHogs}/>
		</div>
	);
}

export default App;
