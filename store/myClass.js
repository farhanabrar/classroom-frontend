export const state = () => {
    return {
        listClass: [],
        current: {
            id: "",
            name: "",
            description: "",
            role: "",
            Schedules: [],
            Join_classes: [],
        },
    };
};

export const mutations = {
    setClass(state, listClass) {
        state.listClass = listClass;
    },
    setCurrent(state, currentClass) {
        state.current = currentClass;
    },

}

export const actions = {
    setClass(context, data) {
        context.commit("setClass", data)
    }
}