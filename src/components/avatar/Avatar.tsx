import { useEffect, useRef, useState } from "react";
import useUserStore from "../../hooks/useUserStore";
import { BiDownload } from "react-icons/bi";
import { RiShareBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Avatar = () => {
  const { username, handleDisconnect } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getInitials = (name: string): string => {
    return name.slice(0, 2).toUpperCase();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close the dropdown
      }
    };

    // Add event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleDeconnexion = () => {
    handleDisconnect();
  };

  return (
    <div className="relative flex items-center gap-x-5" ref={dropdownRef}>
      <button
        className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 hover:scale-105 ease-in-out duration-100"
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={toggleDropdown}
      >
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {getInitials(username)}
        </span>
      </button>

      <div
        id="dropdownInformation"
        className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
        aria-labelledby="dropdownInformationButton"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Bonnie Green</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformationButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="origin-top-right z-50 absolute right-0 mt-[25rem] w-[25rem]  rounded-md shadow-lg bg-neutral-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Link
              to={"../account"}
              className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full px-4 py-2 h-[3rem] text-sm text-neutral-50 hover:bg-neutral-500"
            >
              <div className="col-span-3 flex items-center">
                <p className="text-neutral-300 font-semibold font-normal pt-1 md:block hidden hover:underline">
                  Compte
                </p>
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <RiShareBoxLine className="justify-end text-2xl"></RiShareBoxLine>
              </div>
            </Link>
            <button className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full px-4 py-2 h-[3rem] text-sm text-neutral-50 hover:bg-neutral-500">
              <div className="col-span-3 flex items-center">
                <p className="text-neutral-300 text-sm font-bold text-sm pt-1 md:block hidden hover:underline">
                  Configurer votre abonnement Famille
                </p>
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <RiShareBoxLine className="justify-end text-2xl"></RiShareBoxLine>
              </div>
            </button>
            <button className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full px-4 py-2 h-[3rem] text-sm text-neutral-50 hover:bg-neutral-500">
              <div className="col-span-3 flex items-center">
                <p className="text-neutral-300 text-sm font-bold text-sm pt-1 md:block hidden hover:underline">
                  Profile
                </p>
              </div>
            </button>
            <button className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full px-4 py-2 h-[3rem] text-sm text-neutral-50 hover:bg-neutral-500">
              <div className="col-span-3 flex items-center">
                <p className="text-neutral-300 text-sm font-bold text-sm pt-1 md:block hidden hover:underline">
                  Assistance
                </p>
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <RiShareBoxLine className="justify-end text-2xl"></RiShareBoxLine>
              </div>
            </button>
            <button className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full px-4 py-2 h-[3rem] text-sm text-neutral-50 hover:bg-neutral-500">
              <div className="col-span-3 flex items-center">
                <p className="text-neutral-300 text-sm font-bold text-sm pt-1 md:block hidden hover:underline">
                  Télécharger
                </p>
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <RiShareBoxLine className="justify-end text-2xl"></RiShareBoxLine>
              </div>
            </button>
            <Link
              to="../preferences"
              className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full px-4 py-2 h-[3rem] text-sm text-neutral-50 hover:bg-neutral-500"
            >
              <div className="col-span-3 flex items-center">
                <p className="text-neutral-300 text-sm font-bold text-sm pt-1 md:block hidden hover:underline">
                  Préférences
                </p>
              </div>
            </Link>
            <button
              onClick={handleDeconnexion}
              className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full px-4 py-2 h-[3rem] text-sm text-neutral-50 hover:bg-neutral-500"
            >
              <div className="col-span-3 flex items-center">
                <p className="text-neutral-300 text-sm font-bold text-sm pt-1 md:block hidden hover:underline">
                  Déconnexion
                </p>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
