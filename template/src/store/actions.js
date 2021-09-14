export const actions = {
    onInitializeOvermind: async () => {

    },
    app: {
        setAppState: ({state}, data) => {
            state.app = {...state.app, ...data};
        },
        setAppDevToolsState: ({state}, data) => {
            state.app.devTools = {...state.app.devTools, ...data};
        },
        setLanguage: ({state, effects}, language) => {
            effects.app.changeLocale(language);
            state.app.language = language;
        },
    },
    user: {
        setName: ({state}, name) => {
            state.user.name = name;
        },
        addRole: async ({ state }, role) => {
            state.user.roles.push(role);
            const timeout = () => new Promise(resolve => setTimeout(() => resolve('After 3000ms'), 3000));
            return await timeout();
        },
        removeRole: ({ state }) => {
            state.user.roles.pop();
        },
        setUser: ({ state }, user) => {
            state.user = user;
        },
    },
    count: {
        increment: ({ state }) => {
            state.count++;
        },
        decrement: ({ state }) => {
            state.count--;
        },
    }
};

export default actions;