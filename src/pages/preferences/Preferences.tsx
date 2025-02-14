import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../main/sidebar/Sidebar";
import PreferencesForm from "./preferencesForm/PreferencesForm";

const Preferences = () => {
  return (
    <div className="w-full flex-1 flex gap-x-2 relative">
      <Sidebar></Sidebar>
      <div className="flex-1 h-[calc(100vh-8.5ch)] overflow-y-scroll overflow-x-hidden bg-neutral-800/30 rounded-md relative">
        {/* Navbar */}
        <div className="w-full stycky top-0 z-50">
          <Navbar className={"bg-[#111113]"}></Navbar>
        </div>

        <div className="w-full h-full py-6 bg-gradient-to-b from-neutral-700/20 via-transparent to-transparent md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4 space-y-11">
          <div className="w-full min-h-screen bg-gradient-to-b from-neutral-800/20 via-neutral-800/30 to-neutral-800/30 backdrop-blur  space-y-10">
            <div className="gap-6 mx-auto max-w-[900px] pt-10 pb-4">
              <PreferencesForm></PreferencesForm>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
