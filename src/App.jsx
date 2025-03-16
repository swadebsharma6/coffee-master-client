import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";


const App = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)


  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold text-purple-500 text-center mb-6">Coffee Store App is Here : {coffees.length}</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {
          coffees.map(coffee => <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  );
};

export default App;