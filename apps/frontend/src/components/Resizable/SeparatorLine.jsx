import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * @param {{
 *   dir?: string,
 *   isDragging?: boolean,
 *   disabled?: boolean,
 * }} props
 */
export default function SeparatorLine({ dir, isDragging, disabled, ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <hr
      tabIndex={0}
      className={twMerge(
        'absolute top-0 right-0 m-0 h-full w-px shrink-0 cursor-col-resize border-none bg-[#d3dae6] hover:w-[4px] translate-x-1/2',
        dir === 'horizontal' && 'bg-blue-200',
        !disabled && (isDragging || isFocused) && 'bg-blue-400',
        disabled && 'cursor-not-allowed',
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
}
