import { useState } from "react";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`relative w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition ${
        isOn ? "bg-green-500" : "bg-neutral-700"
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <div
        className={`w-7 h-7 bg-white rounded-full shadow-md transform transition ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
}
