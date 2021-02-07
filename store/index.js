// import Vue from 'vue'
// import Vuex from 'vuex'
// import store from '@/store'
// import createPersistedState from 'vuex-persistedstate'
// import demo from '@/store/modules/demo.js'
// import increments from '@/store/modules/increments.js'
// import taskinfo from '@/store/modules/taskinfo.js'
// import todos from '@/store/modules/todos.js'

import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export const state = () => ({
    message: 'number',
    counter: 0,
})

export const mutations = {
    doit(state) {
        var n = Math.floor(Math.random() * 10);
        state.counter += n;
        state.message = 'add' + n + '.';
    },
    reset(state) {
        state.counter = 0;
        state.message = 'reset';
    }
}
export const plugins = [
    createPersistedState(),
]
// const createStore = () => {
//     return new Vuex.Store({
//         state: function() {
//             return {
//                 message: 'number',
//                 counter: 0,
//                 // task: {
//                 //     name: "",
//                 //     status: null,
//                 //     work: "",
//                 //     days: null,
//                 //   }
//             }
//         },
        // mutations: {
        //     count: function(state) {
        //         state.counter++;
        //     },
        //     reset: function(state) {
        //         state.counter = 0
        //     },
        //     // incStatus: function (state) {
        //     //     if (1 <= state.status && state.status <= 2) {
        //     //       state.status++;
        //     //     }
        //     // },

        // },
        // plugins: [
        //     createPersistedState({
        //         storage: window.sessionStorage
        //     }),
        // ],
  
// export default createStore


// Vue.use(Vuex)
// const store = new Vuex.store({
//     mutations: {},
//     actions: {},
//     getters: {},
//     plugins: [createPersistedState({storage: window.sessionStorage})]
// })

    // const store = createStore({
    //     modules: {
    //         taskinfo,
    //     },
    //     plugins: [
    //         createPersistedState({
    //             paths: [
    //                 'taskinfo'
    //             ]
    //         })
    //     ],
    //     storage: window.sessionStorage
    // })
// const store = function () {

//     return new Vuex.Store({
//         modules: {
//             // demo,
//             // increments,
//             taskinfo,
//             // todos
//         },
//         plugins: [
//             createPersistedState({
//                 key: 'vuex',
//                 paths: [
//                   'demo',
//                   'increments',
//                   'taskinfo',
//                   'todos',
//                 ],
//                 storage: window.sessionStorage,
//               }),
//         ],
//     })
// }
// export default store
// export default store
// export default new Vuex.Store({
//     modules: {
//         taskinfo,
//       },
//     plugins: [createPersistedState({
//         key: 'vuex',
//         paths: [
//             'taskinfo'
//         ],
//         storage: window.sessionStorage
//     }
//     )]
// })