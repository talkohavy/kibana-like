import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import InputFloat from '../InputFloat';
import SelectMenu from './SelectMenu';

// import SelectClearAndArrow from './SelectClearAndArrow';

const defaultDontChangeRule = (_e, newValue) => ({ change: true, newValue });
const defaultGetOptionLabel = (option) => option.label;

function getOptionByLabel({ options, label, getOptionLabel }) {
  return options.find((option) => getOptionLabel(option)?.toString().toLowerCase() === label.toString().toLowerCase());
}
function getOptionByValue({ options, value }) {
  const strValue = value?.toString();
  return options.find((option) => option.value?.toString() === strValue);
}

/** @param { import('../types').SelectFloatProps } props */
export default function SelectFloat({
  options,
  value,
  setValue,
  dontChangeRule = defaultDontChangeRule,
  getOptionLabel = defaultGetOptionLabel,
  labelContent,
  wrapperClassName,
  labelOnEmptyList,
  inputClass,
  inputStyle,
  moveToNextOnEnter = true,
  shouldFilterOptions = false, // Only AutoComplete will use this. A normal Select wouldn't.
  isError,
  name,
  errorName = name,
  setIsTouched,
  validateFunc,
  langCode,
  isRTL,
  testId = '',
}) {
  // all useStates:
  const [searchValue, setSearchValue] = useState(() => {
    const option = getOptionByValue({ options, value });
    return option ? getOptionLabel(option) : '';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(() => options);
  const [hoveredOptionIndex, setHoveredOptionIndex] = useState(-1);

  useEffect(() => {
    // Switching between langauges switches the searchValue label:
    const option = getOptionByValue({ options, value });
    option && setSearchValue(getOptionLabel(option));
    setFilteredOptions(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  // all useRefs:
  const listRef = useRef(null);

  const actionButtons = {
    // Clicked: ArrowDown ArrowUp Enter Esc
    ArrowDown(_e, { setIsFocused }) {
      let newHoveredIndex = 0; // Assume that you can't go down, so first item needs to be hovered.
      setIsFocused(true);
      if (!isMenuOpen) setIsMenuOpen(true);
      else if (hoveredOptionIndex < filteredOptions.length - 1) newHoveredIndex = hoveredOptionIndex + 1;

      setHoveredOptionIndex(newHoveredIndex);
      listRef.current?.scrollToItem(newHoveredIndex);
    },
    ArrowUp() {
      let newHoveredIndex = filteredOptions.length - 1; // Assume that you can't go up, so last item needs to be hovered.
      if (!isMenuOpen) setIsMenuOpen(true);
      else if (hoveredOptionIndex > 0) newHoveredIndex = hoveredOptionIndex - 1; // go up!

      setHoveredOptionIndex(newHoveredIndex);
      listRef.current?.scrollToItem(newHoveredIndex);
    },
    Enter(e, { setIsFocused, shouldUseHoveredIndex = true, shouldPreventDefault = true }) {
      // IMPORTANT: prevent onSubmit event from being fired when selecting a menuItem
      shouldPreventDefault && e.preventDefault();
      let newValue = 0; // 0 = required
      if (shouldUseHoveredIndex || searchValue !== '') {
        let newOption;
        if (shouldUseHoveredIndex) newOption = filteredOptions[hoveredOptionIndex];

        newOption ??= getOptionByLabel({ options, label: searchValue, getOptionLabel });
        newValue = newOption?.value ?? -1; // -1 = invalid
        setValue(newValue);

        newOption && setSearchValue(getOptionLabel(newOption));
      }
      validateFunc?.(newValue);

      setIsFocused(false);
      setIsMenuOpen(false);
      setHoveredOptionIndex(-1);
    },
    NumpadEnter(e, { setIsFocused }) {
      this.Enter(e, { setIsFocused });
    },
    Escape: (_e, { setIsFocused }) => {
      setIsFocused(false);
      setIsMenuOpen(false);
      validateFunc?.(value);
    },
    Tab(e, { setIsFocused }) {
      this.Enter(e, { setIsFocused, shouldUseHoveredIndex: false, shouldPreventDefault: false });
    },
  };

  const onInputKeyDown = (e, { setIsFocused }) => {
    // Clicked: ArrowDown ArrowUp Enter Esc
    actionButtons[e.code]?.(e, { setIsFocused });
  };

  const onInputBlur = (e, { setIsFocused, setInnerValue }) => {
    setIsMenuOpen(false);
    const isOption = getOptionByLabel({ options, label: searchValue, getOptionLabel });
    if (!isOption) actionButtons.Enter(e, { setIsFocused, shouldUseHoveredIndex: false });
    setInnerValue(searchValue);
  };

  const onInputFocus = () => setIsMenuOpen(true);

  const onInputChange = ({ newValue }) => {
    // Step 1: open menu on letter typing
    !isMenuOpen && setIsMenuOpen(true);

    // Step 2: should filter options?
    const newFilteredOptions = shouldFilterOptions
      ? options.filter(({ label }) => label.toLocaleLowerCase().startsWith(newValue))
      : options;
    setFilteredOptions(newFilteredOptions);

    // Step 3: on value change, do a lexicographic hover
    const lowercasedValue = newValue.toString().toLowerCase();
    for (let i = 0; i < newFilteredOptions.length; i++) {
      if (getOptionLabel(newFilteredOptions[i]).toString().toLowerCase().startsWith(lowercasedValue)) {
        setHoveredOptionIndex(i);
        break;
      }
    }
  };

  // const onClearClick = (e) => {
  //   e.stopPropagation();
  //   setIsTouched?.((prevState) => ({ ...prevState, [name]: true }));
  //   setSearchValue('');
  //   setValue(0);
  //   shouldFilterOptions && setFilteredOptions(options);
  // };

  // const onArrowClick = (e) => {
  //   e.stopPropagation();
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // -------------- Render GUI ----------------
  return (
    <div
      className={clsx('relative flex h-fit w-full rounded-md bg-transparent', isMenuOpen && 'z-30', wrapperClassName)}
    >
      <InputFloat
        type='text'
        value={searchValue}
        setValue={setSearchValue}
        dontChangeRule={dontChangeRule}
        labelContent={labelContent}
        wrapperClassName={wrapperClassName}
        inputClass={inputClass}
        inputStyle={inputStyle}
        onInputChange={onInputChange}
        onInputKeyDown={onInputKeyDown}
        onInputBlur={onInputBlur}
        onInputFocus={onInputFocus}
        // renderer={({ isFocused, isHovered }) => (
        //   <SelectClearAndArrow
        //     isFocused={isFocused}
        //     isHovered={isHovered}
        //     isMenuOpen={isMenuOpen}
        //     isError={isError}
        //     onClearClick={onClearClick}
        //     onArrowClick={onArrowClick}
        //   />
        // )}
        moveToNextOnEnter={moveToNextOnEnter}
        isError={isError}
        name={name}
        errorName={errorName}
        setIsTouched={setIsTouched}
        langCode={langCode}
        isRTL={isRTL}
        testId={`${testId}Select`}
      />

      {isMenuOpen && (
        <SelectMenu
          ref={listRef}
          options={filteredOptions}
          value={value}
          setValue={setValue}
          setSearchValue={setSearchValue}
          validateFunc={validateFunc}
          getOptionLabel={getOptionLabel}
          labelOnEmptyList={labelOnEmptyList}
          hoveredOptionIndex={hoveredOptionIndex}
          setIsMenuOpen={setIsMenuOpen}
          langDir={isRTL ? 'rtl' : 'ltr'}
          testId={`${testId}SelectMenu`}
        />
      )}
    </div>
  );
}
