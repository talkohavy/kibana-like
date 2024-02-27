import type { AnyAction } from '@reduxjs/toolkit';

declare type State = {
  user: { isLogged: boolean };
  isSidebarOpen: boolean;
  router: any;
};

declare type GetStateFunction = () => State;

declare type ActionHandlerProps = {
  action: AnyAction;
  dispatch: any;
  getState: GetStateFunction;
};

export { ActionHandlerProps, GetStateFunction, State };
