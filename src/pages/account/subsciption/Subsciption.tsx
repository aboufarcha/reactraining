import { FaSpotify } from "react-icons/fa6";

const Subscription = () => {
  return (
    <div className="col-span-4 bg-neutral-700/60 transition-colors hover:bg-neutral-700/30 w-full rounded-md px-5 py-3 space-y-5">
      <div className="space-y-2 pt-2 pb-3 ">
        <div className="w-full flex items-center justify-between">
          <p className="text-xs text-neutral-100 font-medium">
            Votre abonnement
          </p>
          <p>
            <FaSpotify className="w-7 h-7 text-[#a5bbd1]"></FaSpotify>
          </p>
        </div>

        <h1 className="font-bold text-4xl tracking-tight text-[#a5bbd1]">
          Premium Famille
        </h1>
        <p className="text-md w-4/5">
          Votre prochaine facture sera de <strong>18,21 €</strong>. Elle sera
          prélevée le <strong>15/02/2025</strong>.
        </p>
        <p className="text-md w-4/5">Carte Visa se terminant par 8932.</p>
      </div>
      <div className="flex -space-x-4 pb-4">
        <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center hover:scale-105 ease-in-out duration-100">
          <span className="text-gray-700">A</span>
        </div>
        <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center hover:scale-105 ease-in-out duration-100">
          <span className="text-gray-700">B</span>
        </div>
        <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center hover:scale-105 ease-in-out duration-100">
          <span className="text-gray-700">C</span>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
