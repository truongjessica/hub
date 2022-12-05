import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    loggedIn: true,
});

export { useGlobalState, setGlobalState };