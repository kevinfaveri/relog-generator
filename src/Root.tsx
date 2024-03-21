import {Composition} from 'remotion';
import {RELogComposition, myCompSchema} from './Composition';
import './style.css';
import {LEON_READ_FILE_DURATION_IN_FRAMES} from './sequences/LeonReadFile/const';
import {FPS} from './const';
import {DRM_LOG_FILE_ANIMATION_SECONDS} from './sequences/DRMLogFile/const';

const FILE_TITLE = `Dr. E. Musk's Diary Report`;
const PAGE_CONTENTS = [
	`March 21, 2024

  Successful live test of brain chip on Patient Z playing chess on X platform. 
  Neural link performed flawlessly. 
  Exciting potential applications ahead.`,

	`March 22, 2024
  
  Patient Z killed researcher with brain power during exercise. 
  I fear we underestimated the chip's ability to unleash darker human potential. 
  Trembling as I write this.`,

	`March 23, 2024
  
  Patient Z escaped! Manipulating minds and tech with the chip. 
  I'm barricaded in my office, hearing colleagues' screams. 
  Our creation has become a twisted nightmare. If you're reading this, I'm probably already d–
  [The entry ends abruptly with a jagged line, as if the writer was torn away...]`,
];

export const RemotionRoot: React.FC = () => {
	const durationInFramesForFile =
		FPS * ((PAGE_CONTENTS.length + 1) * DRM_LOG_FILE_ANIMATION_SECONDS);
	return (
		<>
			<Composition
				id="RELogComposition"
				component={RELogComposition}
				durationInFrames={
					LEON_READ_FILE_DURATION_IN_FRAMES + durationInFramesForFile
				}
				fps={FPS}
				width={952}
				height={720}
				schema={myCompSchema}
				defaultProps={{
					fileTitle: FILE_TITLE,
					pageContents: PAGE_CONTENTS,
				}}
			/>
		</>
	);
};
