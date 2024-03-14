"use client";
import type { NextComponentType, NextPageContext } from "next";

interface Props {}

const VideoMaker: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <video
      autoPlay
      muted
      playsInline
      preload="metadata"
      onLoadStart={(e) => {
        e.currentTarget.playbackRate = 2;
      }}
    >
      {/* <source src="/topLogoAnima.mp4" type="video/mp4" /> */}
      <source src="/topPlayer.webm" type="video/webm" />
    </video>
  );
};

export default VideoMaker;
