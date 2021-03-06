// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import reducers and their typings :
import helloWorldReducer from './helloWorld';
import { State as HelloWorldState } from '../actions/types';
import welcomeReducer from './welcome';
import installationReducer from './installation';
import happInstallationReducer from './happInstallation';
import devicePinReducer from './devicePin';
import coreAppReducer from './coreAppSelection';
// import counter from './counter';

export interface RootState {
  helloWorld: HelloWorldState
}

export default function createRootReducer(history: History) {
  return combineReducers<RootState>({
    router: connectRouter(history),
    helloWorld: helloWorldReducer,
    welcomeReducer,
    installationReducer,
    happInstallationReducer,
    devicePinReducer,
    coreAppReducer
    // counter
  });
}
