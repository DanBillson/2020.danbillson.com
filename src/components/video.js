import React from "react"
import YouTube from "react-youtube"

const Video = ({ video }) => {
  const opts = {
    height: "390",
    width: "100%",
  }

  return <YouTube videoId={video.split(`?v=`)[1]} opts={opts} />
}

export default Video
