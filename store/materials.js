export const state =() => {
    return {
        listMaterials: [],
        
    };
};

export const mutations = {
    setListMaterials(state, data) {
        state.listMaterials = data;
    }
   
};

export const actions = { 
    setList({commit}, data) {
        commit("setListMaterials", data)
    }
}