export interface IContainerProps {
    fullPlayer: boolean;
    hideVideo: boolean;
    fontFamily: string;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, IContainerProps, never>;
export interface IControlsProps {
    show: boolean;
    primaryColor: string;
    progressVideo: number;
}
export declare const Controlls: import("styled-components").StyledComponent<"div", any, IControlsProps, never>;
export interface IVideoPreLoadingProps {
    show: boolean;
    colorTitle: string;
    colorSubTitle: string;
    colorIcon: string;
    showError: boolean;
    colorButtonError: string;
    backgroundColorButtonError: string;
    backgroundColorHoverButtonError: string;
    colorHoverButtonError: string;
}
export declare const VideoPreLoading: import("styled-components").StyledComponent<"div", any, IVideoPreLoadingProps, never>;
export interface IStandyByInfoProps {
    show: boolean;
    primaryColor: string;
    secundaryColor: string;
}
export declare const StandyByInfo: import("styled-components").StyledComponent<"div", any, IStandyByInfoProps, never>;
export declare const Loading: import("styled-components").StyledComponent<"div", any, {}, never>;
export interface IVolumeControlProps {
    primaryColor: string;
    percentVolume: number;
}
export declare const VolumeControll: import("styled-components").StyledComponent<"div", any, IVolumeControlProps, never>;
export declare const IconPlayBackRate: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ItemPlaybackRate: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ItemNext: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ItemListReproduction: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ItemListQuality: import("styled-components").StyledComponent<"div", any, {}, never>;
