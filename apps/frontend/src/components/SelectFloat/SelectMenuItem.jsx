import clsx from 'clsx';

const baseItemClassName = 'flex justify-between items-center w-full h-10 px-2 rounded text-xl';
const clickableItemClassName = 'cursor-pointer hover:bg-gray-300 dark:hover:bg-blue-800';

function SelectMenuItem({ index, style, item, hoveredOptionIndex, value, testId }) {
  const { value: itemValue, label, onMenuItemClick } = item;

  return (
    <div
      style={style}
      className={clsx(
        baseItemClassName,
        value !== -999 && clickableItemClassName, // -999 is the "No Results" label.
        hoveredOptionIndex === index && 'bg-gray-300 dark:bg-blue-800',
        itemValue === value && 'bg-rose-200',
      )}
      onMouseDown={onMenuItemClick}
      tabIndex={-1}
      data-test-id={`${testId}MenuItem`}
    >
      {label}
    </div>
  );
}

export default SelectMenuItem;
