import { useCallback, useState } from "react";
import { isMobile } from "react-device-detect";
import useStore from "~/stores/utilstore";
const useVideoPlayer = (
  videoElemRef: any,
  seekBarRef: any,
  progressBarRef: any,
  seekThumbRef: any,
  ppRef:any
) => {
  const silent = useStore((state) => state.silent);
  const setSilent = useStore((state) => state.setSilent);
  const setIsVideoPlaying = useStore((state) => state.setIsVideoPlaying);
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: true,
    isMetaLoaded: false,
    hoverTime: 0,
  });
  const formatTime = (value: any) => {
    var time = "";
    if (value > 0 && value != "Infinity") {
      var hours = Math.floor(((value / 86400) % 1) * 24);
      var minutes = Math.floor(((value / 3600) % 1) * 60);
      var seconds = Math.floor(((value / 60) % 1) * 60);
      if (hours > 0) {
        time += (hours < 10 ? "0" + hours : hours) + ":";
      }
      time += (minutes < 10 ? "0" + minutes : minutes) + ":";
      time += seconds < 10 ? "0" + seconds : seconds;
    } else {
      time = "00:00";
    }
    return time;
  };

  const playVideo = useCallback(() => {
    setPlayerState((previousplayerState) => {
      previousplayerState.isPlaying = true;
      return { ...previousplayerState };
    });
    
    //ppRef.current.classList.add('kk_ply')
    videoElemRef.current.play();
    setIsVideoPlaying(true);
  }, []);

  const pauseVideo = useCallback(() => {
    // console.log("pause video........")
    setIsVideoPlaying(false);
    setPlayerState((previousplayerState) => {
      previousplayerState.isPlaying = false;
      return { ...previousplayerState };
    });
    //ppRef.current.classList.add('kk_pause')
    videoElemRef.current.pause();
  }, []);

  const muteVideo = useCallback(() => {
    setPlayerState((previousplayerState) => {
      previousplayerState.isMuted = true;
      return { ...previousplayerState };
    });
    videoElemRef.current.muted = true;
    setSilent(true);
  }, []);

  const unMuteVideo = useCallback(() => {
    setPlayerState((previousplayerState) => {
      previousplayerState.isMuted = false;
      return { ...previousplayerState };
    });
    videoElemRef.current.muted = false;
    setSilent(false);
  }, []);

  const togglePlay = useCallback(() => {
    setPlayerState((prevState) => ({
      ...prevState,
      isPlaying: !prevState.isPlaying,
    }));
    if (playerState.isPlaying === false) {
      playVideo();
    } else {
      pauseVideo();
    }
    ppRef.current.classList.toggle("kk_pause");
    ppRef.current.classList.toggle("kk_ply");
  }, [playerState.isPlaying]);

  const toggleMute = useCallback(() => {
    setPlayerState((prevState) => ({
      ...prevState,
      isMuted: !prevState.isMuted,
    }));
    if (playerState.isMuted === true) {
      unMuteVideo();
    } else {
      muteVideo();
    }
  }, [playerState.isMuted]);
  const resetProgressBar = () => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = "0%";
    }
  };
  const handleOnMetaLoaded = useCallback(() => {
    resetProgressBar();
    setPlayerState((prevState) => ({
      ...prevState,
      isMetaLoaded: true,
    }));
  }, [playerState.isMetaLoaded]);

  const isTouchEvent = (event) => event.type.startsWith("touch");

  const getEventX = (event) => {
    if (isTouchEvent(event)) {
      return event.touches[0].pageX;
    } else {
      return event.clientX;
    }
  };

  const handleVideoProgress = useCallback((event: any) => {
    const clickX =
      getEventX(event) - seekBarRef.current.getBoundingClientRect().left;
    const seekBarWidth = seekBarRef.current.offsetWidth;

    const progress = (clickX / seekBarWidth) * 100;
    setPlayerState((prevState) => ({
      ...prevState,
      progress,
    }));

    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${progress}%`;
    }
    const newTime = (clickX / seekBarWidth) * videoElemRef.current.duration;
    videoElemRef.current.currentTime = newTime;
  }, []);
  const onSliderMove = (e: any) => {
    const seekBarRect = seekBarRef.current.getBoundingClientRect();
    const clickX = isMobile ? e.touches[0].clientX : e.clientX;
    const relativeX = clickX - seekBarRect.left;
    const seekBarWidth = seekBarRect.width;

    const videoDuration = videoElemRef.current?.duration || 0;
    let newHoverTime = (relativeX / seekBarWidth) * videoDuration;

    if (newHoverTime < 0) {
      newHoverTime = 0;
    } else if (newHoverTime > videoDuration) {
      newHoverTime = videoDuration;
    }

    setPlayerState((previousplayerState) => ({
      ...previousplayerState,
      hoverTime: newHoverTime,
    }));
  };
  const handleOnTimeUpdate = useCallback(() => {
    const progress =
      (videoElemRef.current.currentTime / videoElemRef.current.duration) * 100;
    setPlayerState((prevState) => ({
      ...prevState,
      progress,
    }));

    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${progress}%`;
    }
  }, []);

  return {
    togglePlay,
    toggleMute,
    handleOnMetaLoaded,
    handleOnTimeUpdate,
    handleVideoProgress,
    formatTime,
    playerState,
    playVideo,
    pauseVideo,
    muteVideo,
    unMuteVideo,
    onSliderMove,
    resetProgressBar,
  };
};

export default useVideoPlayer;

