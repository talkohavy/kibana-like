import { useMemo, useRef, useState } from 'react';
import BasicTable from '../../../components/table/BasicTable';
import { COLUMNS } from './helpers';
import TableFooter from './TableFooter';
import { useInfiniteQueryData } from './useInfiniteQueryData';

const resultsPerPageObj = {
  10: { value: 10, label: '10 rows' },
  20: { value: 20, label: '20 rows' },
  50: { value: 50, label: '50 rows' },
  null: { value: 0, label: 'all rows' },
};
const resultsPerPageOptions = Object.keys(resultsPerPageObj).map((key) => resultsPerPageObj[key]);

export default function MainView() {
  const tableRef = useRef(null);
  const [itemsPerPage, setItemsPerPage] = useState(resultsPerPageObj[10].value);
  const [sorting, setSorting] = useState([]);

  const { data, isLoading, isFetching, fetchNextPage } = useInfiniteQueryData({
    viewType: 1,
    itemsPerPage,
    sorting,
  });

  const isInfiniteScrollMode = itemsPerPage === 0;

  // @ts-ignore
  const flatData = useMemo(() => data?.pages?.flatMap((page) => page.data) ?? [], [data]);

  // @ts-ignore
  const totalItemsOverallCount = !data ? 0 : data.pages[0].totalNumOfItems;
  const totalItemsLoadedCount = flatData.length; // (data.pages.length - 1) * data.pages[0].data.length + data.pages[data.pages.length - 1].data.length

  /** @type { import('../../../components/table/types').DefaultColumn } */
  const defaultColumn = useMemo(() => ({ enableSorting: true, enableResizing: false, meta: { align: 'left' } }), []);

  return (
    <div className='flex flex-grow flex-col'>
      <div className='h-48 border'>timeline</div>

      <div className='flex-grow'>
        <div className='h-full w-full'>
          <BasicTable
            ref={tableRef}
            columnDefs={COLUMNS}
            rowData={flatData}
            defaultColumn={defaultColumn}
            rowSelectionMode='multi'
            sorting={sorting}
            setSorting={setSorting}
            className='h-full !max-h-lg items-start justify-center'
            renderTableFooter={(props) => (
              <TableFooter
                {...props}
                resultsPerPageOptions={resultsPerPageOptions}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                totalItemsLoadedCount={totalItemsLoadedCount}
                totalItemsOverallCount={totalItemsOverallCount}
                isInfiniteScrollMode={isInfiniteScrollMode}
                fetchNextPage={fetchNextPage}
                // @ts-ignore
                pagesLoaded={data.pages?.map(({ curPage = 1 }) => curPage)} // <--- only relevant for pagination mode! Irrelevant for infinite scroll mode.
              />
            )}
            onBottomReached={!itemsPerPage && fetchNextPage}
            isLoading={isLoading}
            isFetching={isFetching}
            totalItemsLoadedCount={totalItemsLoadedCount}
            totalItemsOverallCount={totalItemsOverallCount}
            initialPageSize={itemsPerPage}
          />
        </div>
      </div>
    </div>
  );
}
