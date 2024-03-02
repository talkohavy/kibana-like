import { twMerge } from 'tailwind-merge';
import { useResizable } from '../../hooks/useResizable/useResizable';
import SeparatorLine from './SeparatorLine';

/** @typedef {import('../../hooks/useResizable/types').ResizableProps} ResizableProps */

/** @param {ResizableProps} props */
export default function Resizable({
  axis,
  disabled = false,
  initial = 0,
  min = 0,
  max = Infinity,
  reverse,
  onResizeStart,
  onResizeEnd,
  children,
  containerRef,
  className,
}) {
  const resizable = useResizable({
    axis,
    disabled,
    initial,
    min,
    max,
    reverse,
    onResizeStart,
    onResizeEnd,
    containerRef,
  });

  return (
    <div className={twMerge('relative', className)}>
      {children(resizable)}

      <SeparatorLine {...resizable.separatorProps} />
    </div>
  );
}
