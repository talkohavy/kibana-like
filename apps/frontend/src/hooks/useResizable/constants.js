const KEYS_DOWN = ['ArrowDown', 'Down'];
const KEYS_LEFT = ['ArrowLeft', 'Left'];
const KEYS_RIGHT = ['ArrowRight', 'Right'];
const KEYS_UP = ['ArrowUp', 'Up'];
const KEYS_AXIS_X = [...KEYS_LEFT, ...KEYS_RIGHT];
const KEYS_AXIS_Y = [...KEYS_UP, ...KEYS_DOWN];
const KEYS_POSITIVE = [...KEYS_RIGHT, ...KEYS_DOWN];

export { KEYS_AXIS_X, KEYS_AXIS_Y, KEYS_DOWN, KEYS_LEFT, KEYS_POSITIVE, KEYS_RIGHT, KEYS_UP };
