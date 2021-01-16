export const state = () => ({
    users: [],
    checkedUsers: []
})

export const mutations = {
    setUsers(state, users){
        state.users = users
    },
    addUsers(state, data){
        state.checkedUsers = data
    }
}

export const actions = {
    async fetch({commit}) {
        const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
        commit('setUsers', users)
    },
    async addUsers({commit}, data){
        commit('addUsers', data)
    }
}

export const getters = {
    users: s => s.users,
    newCheckUsers: s => s.checkedUsers
}