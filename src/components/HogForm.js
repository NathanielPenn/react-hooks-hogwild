import React, {useState} from "react";
//////////DATA///////////
// import hogs from "../porkers_data";

// function HogForm({freshPiggy}) {
//   // const initialFormValues = {
//   //   name: "",
//   //   specialty: "",
//   //   greased: "",
//   //   weight: "",
//   //   "highest medal achived": "",
//   //   image: ""
//   // }
//     const [formData, setFormData] = useState(initialFormValues);
//     const [newHog, setNewHog] = useState("");
  
//     function handleNewHogData(e) {setNewHog(e.target.value)}

//     function handleHogSubmit(e) {
//       e.preventDefault();
//       const requestObj = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       }
//       fetch(hogs, requestObj)
//       .then(res => res.json())
//       .then(newProject => {
//         onAddProject(newProject);
//         setFormData(initialFormValues);
//       })
  
//     }

//     return (
//       <form onSubmit= {handleHogSubmit}>
//         <input type="text" name="hog" onChange = {handleNewHogData} value ={newHog} />
//         <button type="submit">Get to Hoggin'</button>
//       </form>
//     );
// }

function HogForm() {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [weight, setWeight] = useState("");
  const [greased, setGreased] = useState("clean");
  const [medal, setMedal] = useState("");
  const [image, setImage] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();
  }
  
  const formData = { 
    name,
    specialty,
    greased,
    weight,
    medal,
    image
  }
  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Tell us bout yer Hog</h1>
      <label htmlFor="name">Hog Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="specialty">Specialty</label>
      <input
        type="specialty"
        id="specialty"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      />

      <label htmlFor="image">paste a picture</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <img
        src=""
        alt=""
      />

      <label htmlFor="greased">How greasy are theye</label>
      <select
        id="greased"
        value={greased}
        onChange={(e) => setGreased(e.target.value)}
      >
        <option value="clean">Not Greasy</option>
        <option value="greasy">Greasy</option>
      </select>

      <label htmlFor="weight">Weight</label>
      <input
        type="weight"
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      
      <label htmlFor="medal">Medals</label>
      <input
        type="medal"
        id="medal"
        value={medal}
        onChange={(e) => setMedal(e.target.value)}
      />


      <input type="submit" value="Now yer Hoggin" />
    </form>
  );
}

export default HogForm