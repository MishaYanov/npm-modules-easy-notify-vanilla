export const configBuilder: any = {
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
  changeSizeProperties(
    notifyContainer: HTMLElement,
    width: number,
    height: number
  ) {
    if (!height || !width) return;
    if (height && height > 20) {
      notifyContainer.style.height = `${height}px`;
    } else {
      throw new Error("height too small");
    }
    if (width && width > 50) {
      notifyContainer.style.width = `${width}px`;
    } else {
      throw new Error("width too small");
    }
  },
  pushStyles: () => {
    const head = document.head;
    const style = document.createElement("style");
    style.innerHTML = `@-webkit-keyframes fade-in-fwd{0%{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes fade-in-fwd{0%{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@-webkit-keyframes fade-out-bck{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}}@keyframes fade-out-bck{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}to{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}}@-webkit-keyframes progress{0%{width:0%}to{width:100%}}@keyframes progress{0%{width:0%}to{width:100%}}.notify-container{min-width:200px;max-width:400px;min-height:40px;max-height:fit-content;position:fixed;z-index:99999;padding:5px;border-radius:5px;box-shadow:0 0 10px #0003;background-color:#fff;font-family:Roboto,sans-serif;display:flex;align-items:center}.notify-container .notify-message{font-size:16px;font-weight:400;line-height:1.5;text-align:left;text-decoration:none}.notify-container .notify-close{position:absolute;right:3px;top:3px;height:20px;width:20px;display:flex;align-items:center;justify-content:center;object-fit:cover;cursor:pointer}.notify-container .notify-close .notify-close--img{width:100%;height:100%}.notify-container--animation_in{-webkit-animation:fade-in-fwd .8s ease-in-out both;animation:fade-in-fwd .8s ease-in-out both}.notify-container--animation_out{-webkit-animation:fade-out-bck .5s cubic-bezier(.25,.46,.45,.94) both;animation:fade-out-bck .5s cubic-bezier(.25,.46,.45,.94) both}.notify-container--success{color:#fff;background-color:#4caf50}.notify-container--error{color:#fff;background-color:#f44336}.notify-container--info{color:#fff;background-color:#2196f3}.notify-container--warning{color:#fff;background-color:#ff9800}.notify-position--top{position:sticky;top:10px}.notify-position--bottom{position:sticky;bottom:10px}.notify-icon{margin-right:5px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;object-fit:cover}.notify-icon img{width:24px;height:24px}.notify-progress{position:absolute;bottom:0;left:0;width:100%;height:3px;background-color:#fff;border-radius:0 0 5px 5px}.notify-progress--success div{background-color:#4caf50}.notify-progress--error div{background-color:#f44336}.notify-progress--info div{background-color:#2196f3}.notify-progress--warning div{background-color:#ff9800}.notify-progress--animation{height:100%;border-radius:0 0 5px 5px;-webkit-animation:progress 2s linear;animation:progress 2s linear}`;
    style.id = "notify-style";
    if (!document.getElementById("notify-style")) {
      head.appendChild(style);
    }
  },
};
