import { createColumnHelper } from '@tanstack/react-table';

/**
 * @type { import('@tanstack/react-table').ColumnHelper<{
 *   requestId: string,
 *   level: string,
 *   service: string,
 *   timestamp: string,
 *   method: string,
 *   message: string,
 * }>}
 */
const columnHelper = createColumnHelper();

const COLUMNS = [
  columnHelper.accessor('requestId', { header: 'requestId' }),
  columnHelper.accessor('level', { header: 'Level' }),
  columnHelper.accessor('service', { header: 'service' }),
  columnHelper.accessor('timestamp', { header: 'timestamp' }),
  columnHelper.accessor('method', { header: 'method' }),
  columnHelper.accessor('message', { header: 'message' }),
];

export { COLUMNS };
