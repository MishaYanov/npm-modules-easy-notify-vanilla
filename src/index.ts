import { Builder, configBuilder } from "./logic/index";
import { INotifyConfig, INotifyConstants } from "./models/InotifyParams";
import "./styles/style.scss";

/**
 * A function that displays a notification to the user based on the parameters passed
 * 
 * @param consts - holds the type and message of the notification to be displayed - this is the basic setup
 * a user can use to display notifications
 * @param config - holds the configuration options for the notification here the 
 * user can set the position, timeout, icon, close button, progress bar, height and width of the notification
 * 
 * @returns void
 */
export function notify(consts: INotifyConstants, config?: INotifyConfig): void {
  // ...
  if (!consts.type || !consts.message) {
    throw new Error("notify error: Invalid parameters");
  }
  if (!config) {
    buildNotify(consts);
  } else {
    buildNotify(consts, config);
  }
}

function buildNotify(consts: INotifyConstants, config?: INotifyConfig) {
  
  const baseConfig = new INotifyConfig(config?.isIcon, config?.timeout, config?.position, config?.isCloseButton, config?.isProgress, config?.top, config?.bottom, config?.left, config?.right, config?.height, config?.width);
  console.log(consts, baseConfig);
  //basic logic
  const nContainer = Builder.buildContainer(consts, baseConfig);
  const nMessage = Builder.buildMessage(consts.message);
  
  //config logic
  const icon = config?.isIcon ? Builder.buildIcon(consts.type): null;
   
  const closeBtn =  config?.isCloseButton ? Builder.buildClose(nContainer): null;
  
  const progress = config?.isProgress ? Builder.buildProgress(consts.type, baseConfig.timeout!): null
    
  const position = configBuilder.claculatePosition(baseConfig.position!, baseConfig.top, baseConfig.bottom, baseConfig.left, baseConfig.right);
  if(position.top){
    nContainer.style.top = `${position.top}px`;
  }
  if(position.bottom){
    nContainer.style.bottom = `${position.bottom}px`;
  }
  if(position.left){
    nContainer.style.left = `${position.left}px`;
  }
  if(position.right){
    nContainer.style.right = `${position.right}px`;
  }

  if(baseConfig.width || baseConfig.height){
    configBuilder.changeSizeProperties(nContainer, baseConfig.width, baseConfig.height);
  }

  if(icon){
    nContainer.appendChild(icon);
  }

  if(closeBtn){
    nContainer.appendChild(closeBtn);
  }

  if(progress){
    nContainer.appendChild(progress);
  }

  nContainer.appendChild(nMessage);
  invokeNotification(nContainer, baseConfig.timeout!);
}

function invokeNotification(nContainer: HTMLElement, timeout: number) {
  const body = document.body;
  configBuilder.pushStyles();
  nContainer.classList.add("notify-container--animation_in");
  body.appendChild(nContainer);
  setTimeout(() => {
    nContainer.classList.remove("notify-container--animation_in");
    nContainer.classList.add("notify-container--animation_out");
    setTimeout(() => {
      nContainer.remove();
    }, 500);
  }, timeout);


}

// Path: easy-notify/src/models/InotifyParams.ts
// Path: easy-notify/src/logic/Configure.ts
// Path: easy-notify/src/logic/builder.ts
// Path: easy-notify/src/main.ts
