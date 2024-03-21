import {useState} from 'react';
import useInterval from './useInterval';

const usePages = (pages: string[]) => {
	const [currentPageIndex, setCurrentPageIndex] = useState(0);

	useInterval(() => {
		setCurrentPageIndex((prevIndex) => (prevIndex + 1) % pages.length);
	}, 1000);

	const isFirstPage = currentPageIndex === 0;
	const isLastPage = currentPageIndex === pages.length - 1;
	const hasNextPage = currentPageIndex < pages.length - 1;
	const hasPreviousPage = currentPageIndex > 0;
	const currentPage = pages[currentPageIndex];

	return {currentPage, isFirstPage, isLastPage, hasNextPage, hasPreviousPage};
};

export default usePages;
