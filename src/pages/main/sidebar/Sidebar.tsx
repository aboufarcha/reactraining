import Top from "./top/Top";
import Playlist from "./playlist/Playlist";

const Sidebar = () => {
  return (
    <div className="w-[18.5%] max-h-[calc(100vh-12ch)] h  -[calc(100vh-12ch)] min-h-[calc(100vh-12ch)] spacy-y-2 md:block hidden">
      <Top></Top>
      <Playlist></Playlist>
    </div>
  );
};

export default Sidebar;
