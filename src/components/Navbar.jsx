import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          Majestic Lanka Travels & Taxi
        </h1>

        <div className="flex gap-6 text-white font-medium items-center">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/tours">Tours</Link>

          <Link to="/fleet">Fleet</Link>

          <Link to="/contact">Contact</Link>

          <Link
            to="/login"
            className="bg-amber-500 px-4 py-2 rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;