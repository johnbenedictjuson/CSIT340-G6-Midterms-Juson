function Controls({ onAddSeat, onAddMonth, onReset }) {
  return (
    <div className="flex gap-4">
      <button
        className="cursor-pointer rounded-lg bg-[#CB2957] px-8 py-3 text-xl font-bold text-[#EEEEEE]"
        onClick={onAddSeat}
      >
        Add seat
      </button>
      <button
        className="cursor-pointer rounded-lg bg-[#EEEEEE] px-8 py-3 text-xl font-bold text-[#000000]"
        onClick={onAddMonth}
      >
        Add month
      </button>
      <button
        className="cursor-pointer rounded-lg border-2 border-[#EEEEEE] px-8 py-3 text-xl font-bold"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
}

export default Controls;