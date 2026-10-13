function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-[#CB2957] bg-[#000000] px-20 py-6 text-[#EEEEEE]">
      <h1 className="text-3xl font-bold">Cloudline</h1>
      <ul className="flex gap-10 text-xl">
        <li>Product</li>
        <li>Pricing</li>
        <li>Support</li>
      </ul>
    </nav>
  );
}

export default Navbar;