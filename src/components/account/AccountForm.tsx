import { Controller, useForm } from "react-hook-form";

const AccountForm = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-6  place-content-start justify-items-start max-w-[900px]  mx-auto  gap-8   ">
        <div className="col-span-6 flex items-center ">
          <div className="space-y-2">
            <h3 className=" font-semibold text-neutral-50 ">
              Nom d'utilisateur
            </h3>
            <p className="text-neutral-200 font-base">
              {" "}
              n1msj96whv5zxq3fbkzgxnldkfkdf
            </p>
          </div>
        </div>
        <div className="col-span-6 w-full">
          <div className="space-y-2">
            <h3 className=" font-semibold text-neutral-50 ">Adresse e-mail</h3>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Email is required" }}
              render={({ field, fieldState: { error } }) => (
                <input
                  type="text"
                  className="w-full bg-neutral-900 rounded-md pl-2 pr-3 py-3 border border-1 border-neutral-600 text-neutral-50 "
                />
              )}
            />
          </div>
        </div>
        <div className="col-span-6 w-full">
          <div className="space-y-2">
            <h3 className=" font-semibold text-neutral-50 ">Mot de passe</h3>
            <input
              type="text"
              className="w-full bg-neutral-900 rounded-md pl-2 pr-3 py-3 border border-1 border-neutral-600 text-neutral-50 "
              disabled
            />
          </div>
        </div>
        <div className="col-span-6 w-full">
          <div className="space-y-2">
            <h3 className=" font-semibold text-neutral-50 ">Sexe</h3>
            <Controller
              name="sexe"
              control={control}
              defaultValue=""
              rules={{ required: "Sexe is required" }}
              render={({ field, fieldState: { error } }) => (
                <select
                  name="pets"
                  id="pet-select"
                  className="w-full bg-neutral-900 rounded-md pl-2 pr-3 py-3 border border-1 border-neutral-600 text-neutral-50 "
                >
                  <option value="">--Please choose an option--</option>
                  <option value="Femme">Femme</option>
                  <option value="Homme">Homme</option>
                  <option value="Autre">Autre</option>
                  <option value="NonBinaire">Non binaire</option>
                  <option value="Aucune">Je ne souhaite pas l'indiquer</option>
                </select>
              )}
            />
          </div>
        </div>
        <div className="col-span-6 w-full">
          <div className="space-y-2">
            <h3 className=" font-semibold text-neutral-50 ">
              Date de naissance
            </h3>
            <input
              type="number"
              className="w-[35%] bg-neutral-900 rounded-md pl-2 pr-3 py-3 border border-1 border-neutral-600 text-neutral-50"
            ></input>
            <select
              name="pets"
              id="pet-select"
              className="w-[30%] bg-neutral-900 ml-4 rounded-md pl-2 pr-3 py-3 border border-1 border-neutral-600 text-neutral-50 "
            >
              <option value="">--Please choose an option--</option>
              <option value="dog">Janvier</option>
              <option value="cat">Février</option>
              <option value="cat">Mars</option>
              <option value="hamster">Avril</option>
              <option value="hamster">Mai</option>
              <option value="hamster">Juin</option>
              <option value="hamster">Juillet</option>
              <option value="hamster">Août</option>
              <option value="hamster">Septembre</option>
              <option value="hamster">Octobtre</option>
              <option value="hamster">Novembre</option>
              <option value="hamster">Décembre</option>
            </select>
            <input
              type="number"
              className="w-[31%] ml-4 bg-neutral-900 rounded-md pl-2 pr-3 py-3 border border-1 border-neutral-600 text-neutral-50"
            ></input>
          </div>
        </div>
        <div className="col-span-6 w-full">
          <div className="space-y-2">
            <h3 className=" font-semibold text-neutral-50 ">Pays</h3>
            <select
              name="pets"
              id="pet-select"
              className="w-full bg-neutral-900 rounded-md pl-2 pr-3 py-3 border border-1 border-neutral-600 text-neutral-50 "
              disabled
            >
              <option value="">France</option>
            </select>
            <p className="text-neutral-400 font-medium">
              En savoir plus sur la marche à suivre pour{" "}
              <a href="#" className="underline">
                changer de pays ou de région.
              </a>
            </p>
          </div>
        </div>

        <div className="col-span-6">
          <div className="flex   ">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-10 h-10 text-blue-600 bg-neutral-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-neutral-50">
              Partagez les données sur mon inscription avec les fournisseurs de
              contenu de Spotify à des fins de marketing. Notez que vos données
              peuvent être transférées vers des pays en dehors de l'Espace
              économique européen, comme précisé dans notre Politique de
              confidentialité.{" "}
            </label>
          </div>
        </div>
        <div className="col-span-6">
          <div className="w-[55rem] h-[1px] bg-neutral-700/40"></div>
        </div>
      </div>
      <div className="col-span-4 mt-10">
        <div className="flex justify-end gap-x-5">
          <button className="w-fit text-neutral-400 text-sm font-semibold hover:text-neutral-50 hover:scale-105 ease-in-out duration-100">
            Annuler
          </button>
          <button
            type="submit"
            className="w-fit px-8 h-12 rounded-full bg-green-500 text-base text-neutral-900 font-semibold flex items-center justify-center hover:scale-105 ease-in-out duration-100"
          >
            Enregistrer le profil
          </button>
        </div>
      </div>
      <div className="col-span-4 mt-10">
        <div className="flex justify-center gap-x-5">
          <p className="text-neutral-400 text-xs font-sm">
            Ce site est protégé par reCAPTCHA.{" "}
            <a href="#" className="underline">
              La Politique de confidentialité
            </a>{" "}
            et les{" "}
            <a href="#" className="underline">
              Conditions d'utilisation
            </a>{" "}
            de Google s'appliquent.
          </p>
        </div>
      </div>
    </form>
  );
};

export default AccountForm;
