import createPersistedState from "vuex-persistedstate";

export const state = () => ({
  // task: {
  //     name: "",
  //     status: null,
  //     work: "",
  //     days: null,
  //   },
  counter: 0
});

export const mutations = {
  // incStatus: function (state) {
  //     if (1 <= state.status && state.status <= 2) {
  //         task.status++;
  //       }
  // },
  count: function(state) {
    // state.counter++;
    var n = Math.floor(Math.random() * 10);
    state.counter += n;
  },
  reset: function(state) {
    state.counter = 0;
  }
};

export const plugins = [createPersistedState()];
// export const state = () => {
//     task: {}
//     status: Number
// }

// export const mutations = {
//     incStatus: function(state) {
//         if (1 <= state.task.status && state.task.status <= 2) {
//             state.task.status++;
//           }
//     }
// }

// import Vuex from 'vuex'

// const createStore = () => {
//     return new Vuex.Store({
//         state: function() {
//             return {
//                 message: 'number',
//                 counter: 0
//             }
//         },
//         mutations: {
//             count: function(state) {
//                 state.counter++;
//             },
//             reset: function(state) {
//                 state.counter = 0
//             }

//         }
//     })
// }
// export default createStore

// export const state = () => ({
//     task: null
// })

// export const mutations = {
//     addTask(state) {
//         state.tasks.push({
//             newTaskName,
//             status,
//             newWork,
//             newDays,
//         })
//     }
// }

// export const state = () => ({
//     conut: 0
// })

// const mutations = {
//     inc(state) {
//         state.count += 2
//     }
// }

// export const mutations = {
//     task(state, value) {
//         state.task = value
//     },
//     incStatus(state) {
//         if (1 <= state.status && state.status <= 2) {
//             state.status++;
//           }
//     },
//     decStatus(state) {
//         if (2 <= state.status && state.status <= 3) {
//             state.status--;
//           }
//     },
//
//     removeTask(state, { task }) {
//         state.tasks.splice(state.list.indexOf(task), 1)
//     }
// }
// export const state = () => ({
//     workStatus: 0
// })

// export const mutations = {
//     setStatusState (state, workStatus) {
//         state.workStatus = workStatus
//     }
// }

// export const actions = {
//     incStatus ({ commit }) {
//         commit('setStatus', 1)
//     },
//     decStatus ({ commit}) {
//         commit('setStatus' -1)
//     }
// }

// export const state = () => ({
//     addStatus: 1
// })

// export const mutations = {
//     setStatusState (state, addStatus) {
//         state.addStatus = addStatus
//     }
// }

// export const actions = {
//     notComp ({ commit }) {
//         commit('setStatusState', 1)
//     },
//     progress ({ commit }) {
//         commit('setStatusState', 2)
//     },
//     done ({ commit }) {
//         commit('setStatusState', 3)
//     }
