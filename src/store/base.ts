interface State {
  title: string;
}
const base = {
  namespaced: true,
  state(): State {
    return {
      title: '默认title'
    }
  },
  mutations: {
    changeTitle(state: State, value: string) {
      state.title = value
    }
  }
}
export default base