export const state = () => {
    return {
        listUser: []
    };
};

export const mutations = {
    setUser(state, listUser){
        state.listUser = listUser; 
    }
}