import {createStore} from 'vuex'

const store = createStore({
    state(){
        return{
            listFilm: []
        }
    },
    getters: {
        LISTFILM(state) {
    return state.listFilm;
        }
    }
})


export default store;