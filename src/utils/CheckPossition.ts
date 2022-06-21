export const checkPosition = (position: string) => {
  switch (position) {
    case "auto": 
      return "auto";
    case "top":
      return "top";
    case "top-start":
      return "top-start";
    case "top-end":
      return "top-end";
    case "right":
      return "right";
    case "right-start":
      return "right-start";
    case "right-end":
      return "right-end";
    case "bottom":
      return "bottom";
    case "bottom-start":
      return "bottom-start";
    case "bottom-end":
      return "bottom-end";
    case "left":
      return "left";
    case "left-start":
      return "left-start";
    case "left-end":
      return "left-end";
  }
};
