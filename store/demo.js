// 初期値
export const state = () => ({
    inActive: 0
})

// setterを定義
export const mutations = {
    setActiveState (state, inActive) {
        state.inActive = inActive
    }
}

// メソッド
export const actions = {
    toLeft ({ commit }) {
        commit('setActiveState', 1)
    },
    toRight ({ commit }) {
        commit('setActiveState', 2)
    },
    toDefault ({ commit }) {
        commit('setActiveState', 0)
    }
}