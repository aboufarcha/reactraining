import { FcGoogle } from "react-icons/fc";

const SocialNeworkForm = () => {
  return (
    <>
      <button
        className="w-full px-8 h-14 p-3.5 rounded-full border border-neutral-500 hover:border-neutral-200 text-neutral-200 text-sm font-meduim hover:scale-105 
            cursor-pointer ease-in-out duration-100"
      >
        <FcGoogle></FcGoogle> Google
      </button>
    </>
  );
};

export default SocialNeworkForm;
