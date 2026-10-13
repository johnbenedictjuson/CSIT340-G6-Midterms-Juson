import { useState } from "react";
import PlanCard from "./PlanCard";
import Summary from "./Summary";

const plans = [
    {
        name: "Starter",
        price: 199,
        featureOne: "10 GB storage",
        featureTwo: "Email support",
    },
    {
        name: "Team",
        price: 499,
        featureOne: "100 GB storage",
        featureTwo: "Chat support",
    },
    {
        name: "Business",
        price: 999,
        featureOne: "1000 GB storage",
        featureTwo: "Phone support",
    },
];

function PlanPicker() {
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
        <>
            <div className="flex items-end justify-between bg-[#000000] px-20 py-12 text-[#EEEEEE]">
                <Summary seats={seats} months={months} />
                <div className="flex gap-4">
                    <button
                        className="cursor-pointer rounded-lg bg-[#CB2957] px-8 py-3 text-xl font-bold text-[#EEEEEE]"
                        onClick={handleAddSeat}
                    >
                        Add seat
                    </button>
                    <button
                        className="cursor-pointer rounded-lg bg-[#EEEEEE] px-8 py-3 text-xl font-bold text-[#000000]"
                        onClick={handleAddMonth}
                    >
                        Add month
                    </button>
                    <button
                        className="cursor-pointer rounded-lg border-2 border-[#EEEEEE] px-8 py-3 text-xl font-bold"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </div>

            <main className="grid grid-cols-3 gap-8 px-20 pt-10">
                {plans.map((plan) => (
                    <PlanCard
                        key={plan.name}
                        name={plan.name}
                        price={plan.price}
                        featureOne={plan.featureOne}
                        featureTwo={plan.featureTwo}
                        seats={seats}
                        months={months}
                    />
                ))}
            </main>
        </>
    );
}

export default PlanPicker;