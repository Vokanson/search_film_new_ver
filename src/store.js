import index, {createStore} from 'vuex'

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
        saveSelectedFilm:(state,index)=>{
            let isFilmExist = false;
            if(isFilmExist){
                state.listFilm.map(function (item,index) {
                console.log("items:", item.imdbID,state.mainListFilm.imdbID)
                if(item.imdbID === state.mainListFilm.imdbID) {
                    isFilmExist = true;
                }
            })
                if (!isFilmExist) {
                    state.listFilm.push(state.mainListFilm[0][index])
                }
                    }//else{
                //     state.listFilm.push(index)
                // }
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
        saveFilm({commit},index){
          commit('saveSelectedFilm',index)
        },
        deleteThisFilm({commit},index)
        {
            commit('deleteFilm',index)
        }
    }

})


export default store;