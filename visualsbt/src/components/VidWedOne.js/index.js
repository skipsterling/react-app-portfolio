import React from 'react'
import {
    VideoContainer,
    VideoOne
} from './VideoElements';

const Video = () => {
  return (
  <VideoContainer>
    <VideoOne autoPlay loop src={'https://drive.google.com/uc?export=view&id=1NyC9mH6oLtE4l-_AOfFdLV9w-Wbs3WQY'} type='video/mp4'/>
  </VideoContainer>
  )
}

export default Video