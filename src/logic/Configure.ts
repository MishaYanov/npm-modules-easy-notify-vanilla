export const configBuilder:any = {
  claculatePosition: (
    position: string,
    top: boolean | number,
    bottom: boolean | number,
    left: boolean | number,
    right: boolean | number
  ) => {
    switch (position) {
      case "top-left":
        if (top && left) {
          return { top, left };
        }
        return { top: 10, left: 10 };
      case "top-right":
        if (top && right) {
          return { top, right };
        }
        return { top: 10, right: 10 };
      case "bottom-left":
        if (bottom && left) {
          return { bottom, left };
        }
        return { bottom: 10, left: 10 };
      case "bottom-right":
        if (bottom && right) {
          return { bottom, right };
        }
        return { bottom: 10, right: 10 };
      default:
        return { top: 10, right: 10 };
    }
  },
  changeSizeProperties(notifyContainer:HTMLElement, height:number, width:number){
    if(!height || !width) return;
    if(height && height > 20){
      notifyContainer.style.height = `${height}px`;
    }else{
      throw new Error("height too small")
    }
    if(width && width > 50){
      notifyContainer.style.width = `${width}px`;
    }else{
      throw new Error("width too small")
    }

  }
};
