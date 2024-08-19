import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
  MdOutlineHistory,
  MdPlaylistPlay,
  MdOutlineNewspaper,
  MdOutlineOutlinedFlag,
} from "react-icons/md";
import {
  SiYoutubeshorts,
  SiYoutubegaming,
  SiYoutubekids,
  SiYoutubemusic,
  SiYoutubestudio,
} from "react-icons/si";
import { BsPersonSquare } from "react-icons/bs";
import { CgPlayButtonR } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { PiFire, PiMusicNote, PiFilmSlateLight } from "react-icons/pi";
import { GoTrophy } from "react-icons/go";
import { TbHanger2 } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { RiFeedbackLine } from "react-icons/ri";

export const mainMenuItems = [
  { icon: MdHomeFilled, text: "Home" },
  { icon: SiYoutubeshorts, text: "Shorts" },
  { icon: MdOutlineSubscriptions, text: "Subscriptions" },
];

export const yourMenuItems = [
  { icon: BsPersonSquare, text: "Your channel" },
  { icon: MdOutlineHistory, text: "History" },
  { icon: MdPlaylistPlay, text: "Playlists" },
  { icon: CgPlayButtonR, text: "Your videos" },
  { icon: MdOutlineWatchLater, text: "Watch Later" },
  { icon: AiOutlineLike, text: "Liked videos" },
];
export const subscriptionData = [
  {
    img: "https://yt3.ggpht.com/oxrVbNWD8AliuvkhT_7r8VGEVCiqtKm4jJeLpKchLdCg95crsye5b6qYekaEvuOOPG02lWbgVw=s88-c-k-c0x00ffffff-no-rj",
    name: "GMA Public Affairs",
  },
  {
    img: "https://yt3.ggpht.com/tVMjxuJiE1sLaTqlxUbR3hhfKzdONVvtTZHy4NYJXmvCIUqHIQdqXRDbxF7StkWM2wi7OBFc=s88-c-k-c0x00ffffff-no-rj",
    name: "RagingCactus",
  },
  {
    img: "https://yt3.ggpht.com/PrZwRLLSaiXr5t-GRUhUFch2Qlol1G_voyuo-jJ4y-mqcVza7o7j_24yGRiydUP7UsQiKwo7=s88-c-k-c0x00ffffff-no-rj",
    name: "Google for Developers",
  },
  {
    img: "https://yt3.ggpht.com/3edc2bsQefo311VmaTb8VUO13YMfFXf7aw82ZT08ccpQk27L5qs7XTuXja1V9SlajFEpCCHNF98=s88-c-k-c0x00ffffff-no-rj",
    name: "Zild",
  },
  {
    img: "https://yt3.ggpht.com/fWy2G0J0xKv0J8_shDM6hWC4PlzCIwkNF2mkJjdOxI952H0kw--aUuwgffnSWwN7j0pNxwUozp0=s88-c-k-c0x00ffffff-no-rj",
    name: "Slipknot",
  },
  {
    img: "https://yt3.ggpht.com/1NLjd7Fhf3udkU2milQIjgq_c4JooBcUII0Kb4oLpYTFoP1R_AzjTO-uRo3kmcKgiU9R3eKJ4Q=s88-c-k-c0x00ffffff-no-rj",
    name: "The Weeknd",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AIdro_mKzklyPPhghBJQH5H3HpZ108YcE618DBRLAvRUD1AjKNw=s88-c-k-c0x00ffffff-no-rj",
    name: "Fireship",
  },
];

export const exploreItems = [
  { icon: PiFire, text: "Trending" },
  { icon: PiMusicNote, text: "Music" },
  { icon: PiFilmSlateLight, text: "Films" },
  { icon: SiYoutubegaming, text: "Gaming" },
  { icon: MdOutlineNewspaper, text: "News" },
  { icon: GoTrophy, text: "Sport" },
  { icon: TbHanger2, text: "Fashion & beauty" },
];

export const moreItems = [
  { icon: FaYoutube, text: "Youtube Premium", color: "red" },
  { icon: SiYoutubestudio, text: "Youtube Studio", color: "red" },
  { icon: SiYoutubemusic, text: "Youtube Music", color: "red" },
  { icon: SiYoutubekids, text: "Youtube Kids", color: "red" },
];

export const settingsItems = [
  { icon: CiSettings, text: "Settings" },
  { icon: MdOutlineOutlinedFlag, text: "Report History" },
  { icon: IoMdHelpCircleOutline, text: "Help" },
  { icon: RiFeedbackLine, text: "Send Feedback" },
];

// this is the data needed for sidebar
