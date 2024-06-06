import ReactPlayer from "react-player"
import introVideo from "../assets/videos/introVideo.mp4"

const VideoComponent = ({ setIntroVideoState, setTossState }) => {
	const onEndedHandler = () => {
		setIntroVideoState(false)
		setTossState(true)
		console.log("video ended")
	}

	return (
		<div>
			<ReactPlayer
				url={introVideo}
				width="100%"
				height="100%"
				playing
				muted
				onEnded={onEndedHandler}
			/>
		</div>
	)
}

export default VideoComponent
