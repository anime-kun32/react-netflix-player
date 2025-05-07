import { SyntheticEvent } from 'react';

declare enum LanguagesPlayer {
    pt = "pt",
    en = "en"
}
interface IDataNext {
    title: string;
    description?: string;
}
interface IQualities {
    prefix: string;
    nome: string;
    playing: boolean;
    id: string | number;
}
interface IItemReproduction {
    percent?: number;
    id: number | string;
    playing: boolean;
    name: string;
    /**
     * @deprecated
     */
    nome?: string;
}
interface IProps {
    title?: string | boolean;
    subTitle?: string | boolean;
    titleMedia?: string | boolean;
    extraInfoMedia?: string | boolean;
    playerLanguage?: LanguagesPlayer;
    fullPlayer?: boolean;
    backButton?: () => void;
    src: string;
    autoPlay?: boolean;
    onCanPlay?: () => void;
    onTimeUpdate?: (e: SyntheticEvent<HTMLVideoElement, Event>) => void;
    onEnded?: () => void;
    onErrorVideo?: () => void;
    onNextClick?: () => void;
    onClickItemListReproduction?: (id: string | number, playing: boolean) => void;
    onCrossClick?: () => void;
    primaryColor?: string;
    secundaryColor?: string;
    startPosition?: number;
    playbackRateEnable?: boolean;
    fontFamily?: string;
    playbackRateStart?: number;
    playbackRateOptions?: string[];
    autoControllCloseEnabled?: boolean;
    overlayEnabled?: boolean;
    dataNext?: IDataNext;
    reprodutionList?: IItemReproduction[];
    qualities?: IQualities[];
    onChangeQuality?: (quality: string | number) => void;
}
declare function ReactNetflixPlayer({ title, subTitle, titleMedia, extraInfoMedia, playerLanguage, fullPlayer, backButton, src, autoPlay, onCanPlay, onTimeUpdate, onEnded, onErrorVideo, onNextClick, onClickItemListReproduction, onCrossClick, startPosition, dataNext, reprodutionList, qualities, onChangeQuality, playbackRateEnable, overlayEnabled, autoControllCloseEnabled, primaryColor, secundaryColor, fontFamily, playbackRateOptions, playbackRateStart, }: IProps): JSX.Element;

export { ReactNetflixPlayer };
