export const state =() => {
    return {
        list: [],
        current: {
            id: "",
            name: "",
            code: "",
            Materials: [],
        },
       
    };
};

export const mutations = {
    setList(state, data) {
        state.list = data;
    },
    setCurrent(state,currentSchedule){
        state.current = currentSchedule;
    },
    
};

export const actions = { 
    setList({commit}, data) {
        commit("setList", data)
    }
}