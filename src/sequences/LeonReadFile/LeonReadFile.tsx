import {AbsoluteFill, Video, staticFile} from 'remotion';

export default function LeonReadFile() {
	return (
		<AbsoluteFill>
			<Video src={staticFile('leon-read-file.mp4')} />
		</AbsoluteFill>
	);
}
