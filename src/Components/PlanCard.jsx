import Feature from "./Feature";

function PlanCard({ name, price, featureOne, featureTwo, seats, months }) {
  return (
    <article className="overflow-hidden rounded-xl border-2 border-[#000000] bg-[#EEEEEE]">
      <div className="p-8">
        <h3 className="text-3xl font-bold">{name}</h3>
        <p className="mt-2 text-xl">PHP {price} per seat each month</p>
        <ul className="mt-6 text-xl">
          <Feature label={featureOne} />
          <Feature label={featureTwo} />
        </ul>
      </div>
      <p className="bg-[#000000] px-8 py-5 text-3xl font-bold text-[#EEEEEE]">
        Total: PHP {price * seats * months}
      </p>
    </article>
  );
}

export default PlanCard;