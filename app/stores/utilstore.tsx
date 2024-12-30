import { create } from "zustand";

const useStore = create((set, get) => ({
  vidObject: null,
  sidenavtoggle: false,
  urlupdate: true,
  cmnt_Title: null,
  cmnt_Link: null,
  cmnt_VideoId: null,
  allowNotification: false,
  silent: true,
  muteAdButton: false,
  imaError: false,
  clicked: false,
  notificationAllowed: false,
  elementsVisible: false,
  categoryToggle: false,
  newTitle:
    "Food News, Health News, Indian Recipes, Healthy Recipes, Vegetarian Recipes, Indian Food recipes – NDTV Food",
  isVideoPlaying: true,
  categoryWapToggle: false,
  videoWapToggle: false,
  activeVideoIndex: 0,
  isVideoOverlayVisible: false,
  changeSlide: true,
  loginPanel: false,
  showLoginPanel: false,
  tapToPlay: false,
  categoryFilter: null,
  errParagraphMessage: null,
  backLink: null,
  categoryText: "Select Other Categories",
  swipeVideoText: "swipe up for next",
  isSwiping: true,
  logoEnglish: null,
  setVidObject: (newValue: any) => set({ vidObject: newValue }),
  setLogoEnglish: (newValue: boolean) => set({ logoEnglish: newValue }),
  setIsSwiping: (newValue: boolean) => set({ isSwiping: newValue }),
  beepsDescriptionText:
    "Entertainment, Movies, Lifestyle, Health, Sports, Education, Auto, Food – Explore the  latest viral content on NDTV Shorts.",
  setBeepsDescriptionText: (newValue: string) =>
    set({ beepsDescriptionText: newValue }),
  setSwipeVideoText: (newValue: string) => set({ swipeVideoText: newValue }),
  setCategoryText: (newValue: string) => set({ categoryText: newValue }),
  setBackLink: (newValue: any) => set({ backLink: newValue }),
  setErrParagraphMessage: (newValue: any) =>
    set({ errParagraphMessage: newValue }),
  setCategoryFilter: (newValue: any) => set({ categoryFilter: newValue }),
  setTapToPlay: (newValue: boolean) => set({ tapToPlay: newValue }),
  setLoginPanel: (newValue: boolean) => set({ loginPanel: newValue }),
  setShowLoginPanel: (newValue: boolean) => set({ showLoginPanel: newValue }),
  setChangeSlide: (newValue: boolean) => set({ changeSlide: newValue }),
  setIsVideoOverlayVisible: (newValue: boolean) =>
    set({ isVideoOverlayVisible: newValue }),
  setActiveVideoIndex: (newValue: any) => set({ activeVideoIndex: newValue }),
  setElementsVisible: (newValue: boolean) => set({ elementsVisible: newValue }),
  setCategoryWapToggle: (newValue: boolean) =>
    set({ categoryWapToggle: newValue }),
  setVideoWapToggle: (newValue: boolean) => set({ videoWapToggle: newValue }),
  setCategoryToggle: (newValue: boolean) => set({ categoryToggle: newValue }),
  setSidenavtoggle: (newValue: boolean) => set({ sidenavtoggle: newValue }),
  setIsVideoPlaying: (newValue: boolean) => set({ isVideoPlaying: newValue }),
  setClicked: (newValue: boolean) => set({ clicked: newValue }),
  setSilent: (newValue: boolean) => set({ silent: newValue }),
  setMuteAdButton: (newValue: boolean) => set({ muteAdButton: newValue }),
  setNotificationAllowed: (newValue: boolean) =>
    set({ notificationAllowed: newValue }),

  setUrlupdate: (newValue: boolean) => set({ urlupdate: newValue }),
  setImaError: (newValue: boolean) => set({ imaError: newValue }),
  setNewTitle: (newValue: string) => set({ newTitle: newValue }),
  setAllowNotification: (newValue: boolean) =>
    set({ allowNotification: newValue }),
  setCmntInfo: (cmnt_VideoId, cmnt_Title, cmnt_Link) =>
    set({ cmnt_VideoId, cmnt_Title, cmnt_Link }),
}));

export default useStore;

export const usePageUrlStore: any = create((set: any) => ({
  currentPageUrl: "",
  setCurrentPageUrl: (newValue: any) => set({ currentPageUrl: newValue }),
}));
