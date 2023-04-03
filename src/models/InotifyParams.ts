type INotifyType = "success" | "error" | "warning" | "info";
type INotifyPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export interface INotifyConstants {
  type: INotifyType;
  message: string;
}
export class INotifyConfig {
  isIcon?: boolean = true;
  timeout?: number = 5000;
  position?: INotifyPosition = "bottom-right";
  isCloseButton?: boolean = false;
  isProgress?: boolean = false;
  top?: number | boolean = false;
  bottom?: number | boolean = false;
  left?: number | boolean = false;
  right?: number | boolean = false;
  height?: number | boolean = false;
  width?: number | boolean = false;

  constructor(
    isIcon?: boolean,
    timeout?: number,
    position?: INotifyPosition,
    isCloseButton?: boolean,
    isProgress?: boolean,
    top?: number | boolean,
    bottom?: number | boolean,
    left?: number | boolean,
    right?: number | boolean,
    height?: number | boolean,
    width?: number | boolean
  ) {
    this.isIcon = isIcon ?? this.isIcon;
    this.timeout = timeout ?? this.timeout;
    this.position = position ?? this.position;
    this.isCloseButton = isCloseButton ?? this.isCloseButton;
    this.isProgress = isProgress ?? this.isProgress;
    this.top = top ?? this.top;
    this.bottom = bottom ?? this.bottom;
    this.left = left ?? this.left;
    this.right = right ?? this.right;
    this.height = height ?? this.height;
    this.width = width ?? this.width;
  }
}
