import { RiShareBoxLine } from "react-icons/ri";
import SearchBar from "../../../components/search/SearchBar";
import SwitchButton from "../../../components/switcher/SwitchButton";

const PreferencesForm = () => {
  return (
    <div className="grid  md:grid-cols-4 grid-cols-3 grid-5 w-full gap-10 ">
      <div className="col-span-3 flex items-center mb-6">
        <h1 className="md:text-4xl sm:text-2xl text-2xl font-black text-neutral-50">
          Préférences
        </h1>
      </div>
      <div className="col-span-1 flex items-center justify-end ">
        <SearchBar></SearchBar>
      </div>

      <div className="col-span-3 flex items-center ">
        <div className="space-y-2">
          <h2 className=" font-semibold text-neutral-50 tracking-wide">
            Compte
          </h2>
          <p className="text-neutral-400 font-medium">
            Modifier les méthodes de connexion
          </p>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-end">
        <button
          className=" px-5 h-10 rounded-full border border-neutral-500 hover:border-neutral-200 text-neutral-200 text-sm font-meduim hover:scale-105 
                    cursor-pointer ease-in-out duration-100 grid  grid-cols-3"
        >
          <div className="col-span-2 flex items-center">
            <h1 className="text-neutral-50 text-l   font-bold pt-1 md:block hidden ">
              Modifier
            </h1>
          </div>
          <div className="col-span-1 flex items-center justify-end">
            <RiShareBoxLine className="justify-end text-2xl"></RiShareBoxLine>
          </div>
        </button>
      </div>
      <div className="col-span-3 flex items-center ">
        <div className="space-y-2">
          <h2 className=" font-semibold text-neutral-50 tracking-wide">
            Langue
          </h2>
          <p className="text-neutral-400 font-medium">
            Choisissez une langue : les changements seront appliqués après le
            redémarrage de l'appli
          </p>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-end">
        <select
          id="small"
          className="block w-full p-2 mb-6   rounded-lg bg-neutral-700 text-neutral-400"
        >
          <option value="en">English</option>
          <option value="es">Español (Spanish)</option>
          <option value="fr">Français (French)</option>
          <option value="de">Deutsch (German)</option>
          <option value="it">Italiano (Italian)</option>
          <option value="pt">Português (Portuguese)</option>
          <option value="ru">Русский (Russian)</option>
          <option value="zh">中文 (Chinese)</option>
          <option value="ja">日本語 (Japanese)</option>
          <option value="ar">العربية (Arabic)</option>
          <option value="hi">हिन्दी (Hindi)</option>
          <option value="ko">한국어 (Korean)</option>
        </select>
      </div>
      <div className="col-span-3 flex items-center ">
        <div className="space-y-2">
          <h2 className=" font-semibold text-neutral-50 tracking-wide">
            Bibliothèque
          </h2>
          <p className="text-neutral-400 font-medium">
            Utiliser la disposition de bibliothèque compacte
          </p>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-end">
        <SwitchButton />
      </div>
      <div className="col-span-3 flex items-center ">
        <div className="space-y-2">
          <h2 className=" font-semibold text-neutral-50 tracking-wide">
            Paramètres d'affichage
          </h2>
          <p className="text-neutral-400 font-medium">
            Afficher le panneau En cours de lecture lors du lancement de la
            lecture
          </p>
          <p className="text-neutral-400 font-medium">
            Afficher des visuels brefs et en boucle pour les titres (Canvas)
          </p>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-end mt-5">
        <div className="space-y-2">
          <div className="mb-5">
            <SwitchButton />
          </div>
          <div className="mb-5">
            <SwitchButton />
          </div>
        </div>
      </div>
      <div className="col-span-3 flex items-center ">
        <div className="space-y-2">
          <h2 className=" font-semibold text-neutral-50 tracking-wide">
            Partage
          </h2>
          <p className="text-neutral-400 font-medium">
            Afficher mes listes d'abonnés et d'abonnements sur mon profil public
          </p>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-end">
        <SwitchButton />
      </div>
    </div>
  );
};

export default PreferencesForm;
