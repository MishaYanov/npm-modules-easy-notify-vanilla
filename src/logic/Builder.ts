import { INotifyConfig, INotifyConstants } from "../models/InotifyParams";
import closeSvg from '../assets/icons/close.svg';
import successSvg from '../assets/icons/success.svg';
import errorSvg from '../assets/icons/error.svg';
import warningSvg from '../assets/icons/warning.svg';
import infoSvg from '../assets/icons/info.svg';

export const Builder = {
  buildContainer: (consts: INotifyConstants, config: INotifyConfig) => {
    const container = document.createElement("div");
    container.classList.add("notify-container");
    container.classList.add(`notify-container--animation`);
    container.classList.add(`notify-container--${consts.type}`);
    container.classList.add(`notify-position--${config?.position}`);
    return container;
  },
  buildMessage: (message: string) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add("notify-message");
    messageElement.innerText = message;
    return messageElement;
  },
  buildClose:(baseContainer: HTMLElement)=>{
    const btnDiv = document.createElement("div");
    btnDiv.classList.add("notify-close");
    btnDiv.addEventListener("click", () => {
        baseContainer.classList.remove("notify-container--animation_in");
        baseContainer.classList.add("notify-container--animation_out");
        setTimeout(() => {
            baseContainer.remove();
        }, 500);    });
    const closeImg = document.createElement("img");
    closeImg.classList.add("notify-close--img");
    closeImg.src = closeSvg;
    btnDiv.appendChild(closeImg);
    
    return btnDiv;
  },
  buildProgress:(type:string, timeout:number)=>{
    const progressDiv = document.createElement("div");
    progressDiv.classList.add("notify-progress");
    progressDiv.classList.add(`notify-progress--${type}`);
    const progressBar = document.createElement("div");
    progressBar.classList.add("notify-progress--animation");
    progressBar.style.animationDuration = `${timeout}ms`;
    progressDiv.appendChild(progressBar);
    return progressDiv;
  },
  buildIcon:(type: string)=>{
    const iconDiv = document.createElement("div");
    iconDiv.classList.add("notify-icon");
    iconDiv.classList.add(`notify-icon--${type}`);
    const icon = document.createElement("img");
    icon.src = type === "success" ? successSvg : type === "error" ? errorSvg : type === "warning" ? warningSvg : type === "info" ? infoSvg : "";
    iconDiv.appendChild(icon);
    return iconDiv;
  } 
};

