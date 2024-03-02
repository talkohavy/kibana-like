// import axios from 'axios';
// import { API_URLS } from '../../../utils/apiUrls';

import { data } from './dummyData';

// import { useInfiniteQuery } from '@tanstack/react-query';

// const QID_GALLERY_USER_INFINITE = 'gallery-users-infinite';
const ITEMS_PER_PAGE = 50;

// /** @param {{queryKey: Array<any>; pageParam: any; signal?: any; meta: any}} props */
// async function fetchGalleryUsers({ queryKey }) {
//   const [, itemsPerPage, curPage, sorting] = queryKey;
//   const page = Math.max(curPage, 1);
//   const axiosOptions = { params: { page, view: sorting, limit: itemsPerPage } };

//   return axios.get(API_URLS.users_service.users, axiosOptions);
// }

/**
 * @param {{
 *    itemsPerPage?: number,
 *    page?: number,
 *    sorting?: any,
 *    viewType?: number,
 * }} props
 */
// eslint-disable-next-line
export function useInfiniteQueryData({ itemsPerPage, page, sorting, viewType } = {}) {
  !itemsPerPage && (itemsPerPage = ITEMS_PER_PAGE); // <--- NOTE! in pagination mode, this should always be defined. In infinite scroll mode, this should NOT be defined! (either undefined, null, or 0).

  // return useInfiniteQuery({
  //   queryKey: [QID_GALLERY_USER_INFINITE, itemsPerPage, page, sorting, viewType],
  //   queryFn: fetchGalleryUsers,
  //   cacheTime: 300000, // <--- default value is 5 minutes = 5 * 60 * 1000 = 300000!
  //   // staleTime: 30000, // <--- default value is 0. Every re-visit would trigger a background refetch.
  //   refetchOnWindowFocus: false,
  //   keepPreviousData: true, // <--- Useful for pagination! Defaults to false. Set this to true to keep the previous data when fetching based on a new query key.
  //   select: ({ pageParams, pages }) => ({ pageParams, pages: pages.map((item) => item.data.data) }), // <--- do data-transformation on the response!
  //   getNextPageParam: (_lastPage, pages) => pages.length + 1,
  // });

  return {
    data: { pages: [{ totalNumOfItems: 0, data }] },
    isLoading: false,
    isFetching: false,
    fetchNextPage: () => [],
  };
}
