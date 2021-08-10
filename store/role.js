export const state =() => {
    return {
        role: "",
    };
};

export const mutations = {
    setRole(state, data) {
        state.role = data;
    }
};

export const actions = {
    setRole({commit}, data) {
        commit("setRole", data)
    }
}