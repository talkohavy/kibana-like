import { createAction } from '@reduxjs/toolkit';
import { createActionString } from '../createActionString';

const prefix = 'user';

const ENTER_LOGIN_MODE = createActionString({ prefix, actionString: 'Enter login mode' });

const login = createAction(ENTER_LOGIN_MODE, (payload) => ({ payload }));

export { ENTER_LOGIN_MODE, login, prefix };
