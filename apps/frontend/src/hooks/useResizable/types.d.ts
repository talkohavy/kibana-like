import type React from 'react';

export type Resizable = {
  /**
   * border position
   */
  position: number;
  /**
   * position at end of drag
   */
  endPosition: number;
  /**
   * whether the border is dragging
   */
  isDragging: boolean;
  /**
   * props for drag bar
   */
  separatorProps: SeparatorProps;
  /**
   * set border position
   */
  setPosition: React.Dispatch<React.SetStateAction<number>>;
};

export type ResizableProps = UseResizableProps & {
  /**
   * The className of the wrapper element.
   *
   * Use this to set a max-width for the container.
   */
  className?: string;
  /**
   * callback children
   */
  children: (props: Resizable) => JSX.Element;
};

export type ResizeCallbackArgs = {
  /**
   * position at the time of callback
   */
  position: number;
};

export type SeparatorProps = React.ComponentPropsWithoutRef<'hr'>;

export type UseResizableProps = {
  /**
   * direction of resizing
   */
  axis: 'x' | 'y';
  /**
   * ref of the container element
   */
  containerRef?: React.RefObject<HTMLElement>;
  /**
   * if true, cannot resize
   */
  disabled?: boolean;
  /**
   * initial border position
   */
  initial?: number;
  /**
   * minimum border position
   */
  min?: number;
  /**
   * maximum border position
   */
  max?: number;
  /**
   * calculate border position from other side
   */
  reverse?: boolean;
  /**
   * resizing step with keyboard
   */
  step?: number;
  shiftStep?: number;
  /**
   * callback when border position changes start
   */
  onResizeStart?: (args: ResizeCallbackArgs) => void;
  /**
   * callback when border position changes end
   */
  onResizeEnd?: (args: ResizeCallbackArgs) => void;
};
