import React, { useRef } from "react";
import scss from "./VideoPage.module.scss";
import YouTube, { YouTubeProps } from "react-youtube";
import ReactPlayer from "react-player/lazy";
import ReactAudioPlayer from "react-audio-player";
import plikMuzyki from "./mp3/Tupu tup po śniegu.mp3";

export default function VideoPage() {
  //Audio
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => audioRef.current?.play();
  const pauseAudio = () => audioRef.current?.pause();

  const reactPlayerCanPlay = ReactPlayer.canPlay(
    "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  );
  console.log("reactPlayerCanPlay", reactPlayerCanPlay);
  function Alien() {
    const onPlayerReady: YouTubeProps["onReady"] = (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    };

    const opts: YouTubeProps["opts"] = {
      height: "195",
      width: "320",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        cc_load_policy: 1,
        controls: 1,
      },
    };

    return (
      <YouTube videoId="UaSkttCxw-c" opts={opts} onReady={onPlayerReady} />
    );
  }

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target

    event.target.pauseVideo();
  };
  const opts: YouTubeProps["opts"] = {
    height: "195",
    width: "320",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className={scss["container-video-page"]}>
      <h1>Video Page</h1>

      <div className={scss["container-youtube"]}>
        <h2>1. YouTube</h2>
        <div className={scss["container-video-youtube"]}>
          <Alien />
          <YouTube videoId="m9_4qmDys4A" opts={opts} onReady={onPlayerReady} />
        </div>
      </div>
      <div className={scss["container-youtube"]}>
        <h2>2. ReactPlayer</h2>
        <div className={scss["container-video-youtube"]}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ" // Link do Vimeo
            height="98px"
            width="160px"
            controls // Pokaż kontrolki playera
            // playing // Automatyczne odtwarzanie
            onPause={() => console.log("Wideo zatrzymane!")}
            onPlay={() => console.log("Wideo odtwarzane!")}
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=jCJ7pHxKlEM" // Link do Vimeo
            height="195px"
            width="320px"
            controls // Pokaż kontrolki playera
            // playing // Automatyczne odtwarzanie

            onPause={() => console.log("Wideo zatrzymane!")}
            onPlay={() => console.log("Wideo odtwarzane!")}
            onError={() => console.log("Error!")}
          />
          <div className={scss["player-wrapper"]}>
            <ReactPlayer
              className={scss["react-player"]}
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="100%"
              height="100%"
              onError={() => console.log("Error! ReactPlayer")}
            />
          </div>
          <ReactPlayer
            url={[
              "https://www.youtube.com/watch?v=oUFJJNQGwhk",
              "https://www.youtube.com/watch?v=jNgP6d9HraI",
            ]}
            height="195px"
            width="320px"
          />
        </div>
      </div>
      <div className={scss["container-audio"]}>
        <h1>Audio</h1>
        <div className={scss["custom-audio-player"]}>
          <audio ref={audioRef} src={plikMuzyki}></audio>
          <div className={scss["controls"]}>
            <button onClick={playAudio}>Play</button>
            <button onClick={pauseAudio}>Pause</button>
          </div>
        </div>
      </div>
    </div>
  );
}
