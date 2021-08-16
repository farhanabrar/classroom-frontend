export const state = () => {
    return {
        myclasses: [],
    }
};

export const mutations = {
    setmyclass(state, myclasses) {
        state.myclasses = myclasses;
    }
}

export const actions = {
    setmyclass(context, data) {
        context.commit("setmyclass", data)
    }
}