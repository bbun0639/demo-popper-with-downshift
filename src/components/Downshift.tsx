import React, { useState, FC } from "react";
import { useSelect } from "downshift";
import Popper from "./Popper";
import { Placement } from "@popperjs/core";
import { checkPosition } from "../utils/CheckPossition"
import downshiftIcon from "../assets/downshift-icon.png"

const itemPositions = [
  "auto",
  "top",
  "top-start",
  "top-end",
  "right",
  "right-start",
  "right-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end",
];

const Downshift = () => {
  const [newPosition, setNewPosition] = useState<Placement>("auto");

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: itemPositions,
    selectedItem: newPosition,
    onSelectedItemChange: (e) => {
      if (e.selectedItem) {
        const posSelected = checkPosition(e.selectedItem)
        if (posSelected) {
          setNewPosition(posSelected);
        }
      }
    },
  });

  return (
    <>
      <div className="mb-10 px-3">
        <div className="flex flex-col justify-center">
          <label
            {...getLabelProps()}
            className="text-xl text-white flex flex-col justify-center items-center"
          >
            Select an possition with
            <div className="flex">
              <div className="text-[#ff6b81]">DownshiftJS</div>
              <picture>
                <img
                  className="w-[60px] ml-3"
                  src={downshiftIcon}
                  alt="ds-logo"
                />
              </picture>
            </div>
          </label>
        </div>
        <div className="relative">
          <button
            type="button"
            {...getToggleButtonProps()}
            className="p-2 mt-5 bg-white rounded-lg w-full relative"
          >
            <div>
              {selectedItem || "click to select possition"}
            </div>
            <div className="absolute top-2 right-3">
              {isOpen ? <div className="rotate-180">&#8963;</div> : <>&#8963;</>}
            </div>
          </button>
          <ul
            {...getMenuProps()}
            className={`mt-2 rounded-lg  overflow-auto  absolute w-full z-10`}
            style={isOpen ? { height: "200px", backgroundColor: "#fff" } : {}}
          >
            {isOpen &&
              itemPositions.map((item, index) => (
                <li
                  className=" p-2 text-center cursor-pointer"
                  style={
                    highlightedIndex === index
                      ? { backgroundColor: "#ffda7d", color: "#000000" }
                      : {}
                  }
                  key={`${index}`}
                  {...getItemProps({ item, index })}
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <Popper position={newPosition}/>
    </>
  );
};

export default Downshift;
