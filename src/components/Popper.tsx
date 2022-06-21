import React, { useState, useEffect, useRef, FC } from "react";
import { Placement } from "@popperjs/core";
import { usePopper } from "react-popper";
import popcornIcon from "../assets/popcorn-box.png"

type PositionProps = {
  position: Placement;
};

const Popper: FC<PositionProps> = ({position}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollRef = ref.current;
    scrollRef?.scrollTo(300,200);
    // use document.querySelector is the old but same way!
    // document.querySelector('#container')?.scrollTo(300,100);
  }, [])

  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: position,
    modifiers: [
      {
        name: "flip",
        options: {
          allowedAutoPlacements: ["top", "bottom", "right", "left"],
        },
      },
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
      { 
        name: "arrow", 
        options: { 
          element: arrowElement 
        } 
      },
    ],
  });

  return (
    <>
      <div 
        ref={ref}
        className="relative w-[300px] h-[300px] overflow-y-scroll border-2 border-dashed border-[#ff6b81] overflow-y-scroll mx-auto rounded"
      >
        <div className="h-[600px] w-[900px] flex justify-center mt-[300px]">
          <div
            id="popcorn"
            ref={setReferenceElement}
            aria-describedby="popper"
            className="w-[134px] h-[120px]" 
          >
            <picture>
              <img src={popcornIcon} alt="popcorn-icon"/>
            </picture>
          </div>
          <div
            id="popper"
            ref={setPopperElement}
            // role="popper"
            style={styles.popper}
            {...attributes.popper}
          >
            <div>Popper</div>
            <div
              id="arrow"
              data-popper-arrow
              style={styles.arrow}
              ref={setArrowElement}
            ></div>
          </div>
        </div>
      </div>
      <p className="text-md text-end text-[#ff6b81] px-2">
        PopperJS
      </p>
    </>
  );
};

export default Popper;
