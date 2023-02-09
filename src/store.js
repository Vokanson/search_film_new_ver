import {createStore} from 'vuex'

const store = createStore({
    state(){
        return{
            listFilm: [],
            mainListFilm: []
        }
    },
    mutations: {
        cleanList:(state)=>{
            return state. mainListFilm.splice(0)
            // console.log(state.listFilm)
            // console.log(index)
        },
        deleteFilm:(state, index)=>{
            return state.listFilm.splice(index,1)
            // console.log(state.listFilm)
            // console.log(index)
        }
    },
    actions: {
        clearListFilm({commit})
        {
            commit('cleanList')
        },
        deleteThisFilm({commit},index)
        {
            commit('deleteFilm',index)
        }
    }

})


export default store;