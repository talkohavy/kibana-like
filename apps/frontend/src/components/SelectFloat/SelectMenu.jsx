import React, { forwardRef, useMemo } from 'react';
import clsx from 'clsx';
import { FixedSizeList as List } from 'react-window';
import SelectMenuItem from './SelectMenuItem';

const ITEM_HEIGHT = 35;
const WINDOW_HEIGHT = 175;
const MAX_ITEMS_DISPLAYED = 5;

function SelectMenu(
  {
    options,
    value,
    setValue,
    setSearchValue,
    validateFunc,
    getOptionLabel,
    labelOnEmptyList,
    hoveredOptionIndex,
    setIsMenuOpen,
    langDir,
    testId = '',
  },
  ref,
) {
  const optionItems = useMemo(() => {
    if (!options.length) return [{ value: -999, label: labelOnEmptyList }];

    return options.map((option) => {
      const optionLabel = getOptionLabel(option);
      const optionValue = option.value;

      const onMenuItemClick = (e) => {
        // right-mouse-click: e.button = 2 , left-mouse-click: e.button = 0
        if (e.button === 2) return;
        setValue(optionValue);
        setSearchValue(optionLabel);
        validateFunc?.(optionValue);
        setIsMenuOpen(false);
      };

      return { value: optionValue, label: optionLabel, onMenuItemClick };
    });
  }, [options, getOptionLabel, labelOnEmptyList, setValue, setSearchValue, setIsMenuOpen, validateFunc]);

  return (
    <div
      className={clsx(
        'absolute top-[41px] z-30 w-full max-w-xs rounded border border-gray-300 bg-white dark:bg-gray-700',
        !optionItems.length && !labelOnEmptyList && 'hidden',
      )}
    >
      <List
        height={optionItems.length > MAX_ITEMS_DISPLAYED ? WINDOW_HEIGHT : optionItems.length * ITEM_HEIGHT}
        itemSize={ITEM_HEIGHT}
        itemCount={optionItems.length}
        direction={langDir}
        ref={ref}
        width='auto'
      >
        {(props) => (
          <SelectMenuItem
            {...props}
            item={optionItems[props.index]}
            hoveredOptionIndex={hoveredOptionIndex}
            value={value}
            testId={testId}
          />
        )}
      </List>
    </div>
  );
}

const ForwardedSelectMenu = forwardRef(SelectMenu);

export default ForwardedSelectMenu;
