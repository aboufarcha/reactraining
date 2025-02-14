import { useEffect, useRef, useState } from "react";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
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

  return (
    <div className="flex items-center gap-2">
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative transition-all duration-300 ${
          isOpen
            ? "w-0 overflow-hidden"
            : "p-2 rounded-full bg-neutral-800/30 text-neutral-400 hover:bg-neutral-700 transition"
        }`}
      >
        <GoSearch className="w-6 h-6"></GoSearch>
      </button>

      <div
        ref={searchInputRef}
        className={`relative transition-all duration-300 ${
          isOpen ? "w-64" : "w-0 overflow-hidden"
        }`}
      >
        <GoSearch className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"></GoSearch>
        <input
          type="text"
          className="w-full bg-neutral-700 rounded-lg pl-10 pr-3 py-2 outline-none text-neutral-400 "
        />
      </div>
    </div>
  );
};

export default SearchBar;
