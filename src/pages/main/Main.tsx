import Player from "../../components/player/Player";
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";

const Main = () => {
  return (
    <div className="w-full flex-1 flex gap-x-2 relative p-2 ">
      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Content */}
      <Content></Content>

      {/* Player  */}
      <Player></Player>
    </div>
  );
};

export default Main;
