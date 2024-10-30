import { useState } from 'react'; // Import useState
import Link from './Link'; // Ensure this file exists and is correctly named.
import { CiMenuFries } from 'react-icons/ci'; // Confirm the icon import.

const Navbar = () => {
  const [open, setOpen] = useState(false); // State to toggle mobile menu
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '*', name: 'NotFound' },
  ];

  return (
    <nav className="flex items-center bg-gray-500 p-4">
      {/* Icon Menu */}
      <div className="md:hidden">
        <CiMenuFries
          size={20}
          className="mr-4 cursor-pointer"
          onClick={() => setOpen(!open)} // Toggle mobile menu on click
        />
      </div>

      {/* Nav Links */}
      <ul
        className={`flex-col md:flex-row md:flex space-x-4 ${
          open ? 'flex' : 'hidden'
        } md:space-y-0 space-y-2`}
      >
        {routes.map(
          (route) =>
            route.path !== '*' && <Link key={route.id} route={route} />
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
