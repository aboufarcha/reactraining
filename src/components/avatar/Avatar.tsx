import useUserStore from "../../hooks/useUserStore";

const Avatar = () => {
  const { username } = useUserStore();

  const getInitials = (name: string): string => {
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="relative flex items-center gap-x-5">
      <button
        className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 hover:scale-105 ease-in-out duration-100"
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        aria-haspopup="true"
        aria-expanded="false"
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
    </div>
  );
};

export default Avatar;
