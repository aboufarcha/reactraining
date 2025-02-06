import { Link } from "react-router-dom";
import PlayBtn from "../playBtn/PlayBtn";
import React from "react";
// Define the props type
interface RadioCardProps {
  RadioImg: string;
  RadioName: string;
  RadioArtist: string; // Note the corrected spelling of RadioTag
}

const RadioCard: React.FC<RadioCardProps> = ({
  RadioImg,
  RadioName,
  RadioArtist,
}) => {
  return (
    <Link
      to={"/Radio-detail"}
      className="w-full px-3 py-2 rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 ease-in-out duration-100 group cursor-pointer"
    >
      <div className="w-full h-auto relative">
        <img
          src={RadioImg}
          alt=""
          className="w-full aspect-square object-cover object-center rounded-full"
        />
        {/* Hover image */}
        <PlayBtn></PlayBtn>
      </div>
      <div className="space-y-1">
        <h5 className="text-base font-medium text-neutral-100">{RadioName}</h5>
        <p className="text-sm text-neutral-400">{RadioArtist}</p>
      </div>
    </Link>
  );
};

export default RadioCard;
