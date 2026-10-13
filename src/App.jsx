import { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import PlanCard from "./Components/PlanCard";
import PlanPicker from "./Components/PlanPicker";
import Summary from "./Components/Summary";

const plans = [
  { name: "Starter", price: 199, features: ["10 GB storage", "Email support"] },
  { name: "Team", price: 499, features: ["100 GB storage", "Chat support"] },
  { name: "Business", price: 999, features: ["1000 GB storage", "Phone support"] },
];

function App() {
  const [seats, setSeats] = useState(1);
  const [months, setMonths] = useState(1);

  function handleAddSeat() {
    setSeats((currentSeats) => currentSeats + 1);
  }

  function handleAddMonth() {
    setMonths((currentMonths) => currentMonths + 1);
  }

  function handleReset() {
    setSeats(1);
    setMonths(1);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
      <Navbar />

      <div className="flex items-end justify-between bg-[#000000] px-20 py-12 text-[#EEEEEE]">
        <Summary seats={seats} months={months} />
        <PlanPicker
          onAddSeat={handleAddSeat}
          onAddMonth={handleAddMonth}
          onReset={handleReset}
        />
      </div>

      <main className="grid grid-cols-3 gap-8 px-20 pt-10">
        {plans.map((plan) => (
          <PlanCard key={plan.name} {...plan} seats={seats} months={months} />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;