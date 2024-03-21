import {
	Img,
	staticFile,
	useCurrentFrame,
	Audio,
	Sequence,
} from 'remotion';
import {z} from 'zod';
import {
	DRM_LOG_FILE_ANIMATION_FRAMES,
} from './const';
import {FPS} from '../../const';

import { loadFont } from "@remotion/google-fonts/Oswald";
const { fontFamily } = loadFont();

export const schema = z.object({
	allPages: z.array(z.string()),
	currentIndex: z.number(),
});

export const DRMLogFile = ({
	allPages,
	currentIndex,
}: z.infer<typeof schema>) => {
	const frame = useCurrentFrame();

	const quarterFramesArrowAnimation = DRM_LOG_FILE_ANIMATION_FRAMES / 4;
	const animation =
		frame % (2 * quarterFramesArrowAnimation) < quarterFramesArrowAnimation
			? 25
			: 0;
	const hasNextPage = currentIndex < allPages.length - 1;
	const hasPreviousPage = currentIndex > 0;

	const audioStartFrame = DRM_LOG_FILE_ANIMATION_FRAMES - 0.5 * FPS;
	const isLastPage = currentIndex === allPages.length - 1;
	const currentPage = allPages[currentIndex];
	return (
		<div className="relative bg-black h-full w-full">
			<div className="relative">
				<Img
					src={staticFile('drm-diaries.png')}
					className="object-scale-down scale-125 h-[720px] w-[952px]"
				/>
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50" />
			</div>
			<div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
				<pre className="text-white text-center text-2xl font-light" style={{ fontFamily }}>
					{currentPage}
				</pre>
			</div>
			{!isLastPage && (
				<Sequence from={audioStartFrame}>
					<Audio src={staticFile('revil2-sound-effect.mp3')} />
				</Sequence>
			)}

			{hasNextPage && (
				<div
					style={{
						position: 'absolute',
						right: `${100 - animation}px`,
						top: '50%',
						transform: 'translateY(-50%)',
					}}
				>
					<Img
						src={staticFile('right-arrow.png')}
						style={{width: '50px', height: '50px'}}
					/>
				</div>
			)}
			{hasPreviousPage && (
				<div
					style={{
						position: 'absolute',
						left: `${100 - animation}px`,
						top: '50%',
						transform: 'translateY(-50%)',
					}}
				>
					<Img
						src={staticFile('left-arrow.png')}
						style={{width: '50px', height: '50px'}}
					/>
				</div>
			)}
		</div>
	);
};
