export const state = () => {
    return {
        classID: [{
            id: "",
        }],
    }
};

export const mutations = {
    setclassID(state, classID) {
        state.classID = classID
    }
}
export const actions = {
    setclassID(context, data) {
        context.commit("setclassID", data)
    }
}