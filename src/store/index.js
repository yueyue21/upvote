import { createStore } from "vuex";

const store = createStore({
  state() {
    return { upvoteList: [3, 5, 2], activeList: [false, true, false] };
  },
  mutations: {
    clearAll(state) {
      state.upvoteList = [];
      state.activeList = [];
    },
    setAsActive(state, payload) {
      state.activeList.fill(false);
      state.activeList[payload] = true;
      // console.log(payload, state.activeList);
    },
    newVote(state) {
      state.upvoteList.push(1);
      state.activeList.fill(false);
      state.activeList.push(true);
    },
    voteOn(state, payload) {
      state.upvoteList[payload] += 1;
    },
  },
  getters: {
    upvoteList(state) {
      return state.upvoteList;
    },
    activeList(state) {
      return state.activeList;
    },
  },
});

export default store;
