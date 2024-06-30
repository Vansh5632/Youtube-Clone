import React from "react";
import {
  MdHomeFilled,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

const Sidebar = () => {
  // Define an array of main links
  const mainLinks = [
    {
      icon: <MdHomeFilled />, // Home icon
      name: "Home", // Link name
    },
    {
      icon: <SiYoutubeshorts />, // Shorts icon
      name: "Shorts", // Link name
    },
    {
      icon: <MdSubscriptions />, // Subscription icon
      name: "Subscription", // Link name
    },
  ];

  // Define an array of secondary links
  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary />, // Library icon
      name: "Library", // Link name
    },
    {
      icon: <MdHistory />, // History icon
      name: "history", // Link name
    },
    {
      icon: <MdOutlineWatchLater />, // Watch later icon
      name: "watchlater", // Link name
    },
  ];

  return (
    <div className="w-2/12 bg-[#212121] h-screen  overflow-auto pb-8">
      <ul className="flex flex-col border-b-1 border-gray-700 w-auto">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li key={name} className="flex flex-row pl-6 py-3 text-2xl gap-4 hover:bg-zinc-600">
              <a href="#">{icon}</a>
              <span className="tracking-wider">{name}</span> {/* Render the link icon */}
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col w-auto">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className="flex flex-row pl-6 py-3 text-2xl gap-4 hover:bg-zinc-600">
              <a href="#">{icon}</a>
              <span className="tracking-wider">{name}</span> {/* Render the link icon */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
