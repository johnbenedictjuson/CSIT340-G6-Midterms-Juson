import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import PlanPicker from "./Components/PlanPicker";
import Waitlist from "./Components/Waitlist";

function App() {
	return (
		<div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
			<Navbar />
			<PlanPicker />
			<Waitlist />
			<Footer />
		</div>
	);
}

export default App;
