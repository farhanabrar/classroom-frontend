export const state = () => {
    return {
        isJoin: "",
        ID: ""
    };
};

export const mutations = {
    setjoin(state, data) {
        state.isJoin = data;
    },
    setid(state, data) {
        state.ID = data;

    },
};

export const actions = {
    setJoin({ commit }, data) {
        commit("setJoin", data)
    }
}