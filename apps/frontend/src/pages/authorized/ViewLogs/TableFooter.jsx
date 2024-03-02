import SelectFloat from '../../../components/SelectFloat';

export default function TableFooter({
  // Automatically inserted:
  setPageSize,
  getPrePaginationRowModel,
  // Manually inserted:
  resultsPerPageOptions,
  itemsPerPage,
  setItemsPerPage,
}) {
  return (
    <div className='flex w-full items-center justify-start gap-3 p-2'>
      <p className='whitespace-nowrap'>Rows per page:</p>

      <SelectFloat
        value={itemsPerPage} // another possibility was: getState().pagination.pageSize
        setValue={(value) => {
          const pageSizeRaw = Number(value);
          const pageSize = isNaN(pageSizeRaw) ? null : pageSizeRaw;
          setPageSize(pageSize || Number.MAX_SAFE_INTEGER);
          setItemsPerPage(pageSize);
        }}
        options={resultsPerPageOptions}
        wrapperClassName='w-44'
      />

      <strong className='whitespace-nowrap'>Total results found: {getPrePaginationRowModel().rows.length}</strong>
    </div>
  );
}
