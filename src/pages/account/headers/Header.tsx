import { Link } from "react-router-dom";
import useUserStore from "../../../hooks/useUserStore";
import { FaSpotify } from "react-icons/fa6";

const Header = () => {
  const { username } = useUserStore();
  console.log("username : ", username);
  const handleBack = () => {
    window.history.back();
  };

  const handleNext = () => {
    window.history.forward();
  };

  return (
    <header className="bg-neutral-900 text-white p-4 h-[80px]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link
            to={"/"}
            className="flex items-center gap-x-0.5 text-neutral-50"
          >
            <FaSpotify className="w-10 h-10"></FaSpotify>
            <p className="ml-2 font-bold text-2xl tracking-tight">Spotify</p>
          </Link>
        </div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="hover:text-gray-400">
            Pronium
          </a>
          <a href="#" className="hover:text-gray-400">
            Assistance
          </a>
          <a href="#" className="hover:text-gray-400">
            Télécharger
          </a>
          <div className="relative">
            <button className="hover:text-gray-400 flex items-center">
              Profil ▼
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
