import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import Album from "./album/Album";
import Artist from "./artist/Artist";

const Content = () => {
  return (
    <div className="flex-1 h-[calc(100vh-8.5ch)] overflow-y-scroll overflow-x-hidden bg-neutral-800/30 rounded-md relative">
      {/* Navbar */}
      <div className="w-full stycky top-0 z-50">
        <Navbar className={"bg-[#111113]"}></Navbar>
      </div>

      {/** Content */}
      <div className="w-full h-full py-6 bg-gradient-to-b from-neutral-700/20 via-transparent to-transparent md:pl-4 md:pr-7 sm:pr-5 pr-4 space-y-11">
        {/* Popular artists */}
        <Artist></Artist>

        {/* Popular albums */}
        <Album></Album>

        {/* Popular radio */}

        {/* Popular podcasts */}

        {/* Footer */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Content;
