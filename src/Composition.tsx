import {AbsoluteFill, Audio, Series, staticFile} from 'remotion';
import {z} from 'zod';
import LeonReadFile from './sequences/LeonReadFile/LeonReadFile';
import {LEON_READ_FILE_DURATION_IN_FRAMES} from './sequences/LeonReadFile/const';
import {DRMLogFile} from './sequences/DRMLogFile/DRMLogFile';
import {DRM_LOG_FILE_ANIMATION_FRAMES} from './sequences/DRMLogFile/const';

export const myCompSchema = z.object({
	fileTitle: z.string(),
	pageContents: z.array(z.string()),
});

export type RELogCompositionProps = z.infer<typeof myCompSchema>;

export const RELogComposition = ({
	fileTitle,
	pageContents,
}: RELogCompositionProps) => {
	const allPages = [fileTitle, ...pageContents];
	return (
		<AbsoluteFill>
     	<Audio src={staticFile('re2-bg-sound.mp3')} volume={0.1} />
			<Series>
				<Series.Sequence durationInFrames={LEON_READ_FILE_DURATION_IN_FRAMES}>
					<LeonReadFile />
				</Series.Sequence>
				{allPages.map((_, index) => (
					<Series.Sequence durationInFrames={DRM_LOG_FILE_ANIMATION_FRAMES}>
						<DRMLogFile allPages={allPages} currentIndex={index} />
					</Series.Sequence>
				))}
			</Series>
		</AbsoluteFill>
	);
};
