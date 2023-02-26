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
            if(state.listFilm.length) {
                console.log("saveSelectedFilm in store")
                let isFilmExist = false;
                    console.log("if in store")
                    state.listFilm.map(function (item,) {
                        console.log("items:", item.imdbID,index.imdbID)
                        if(item.imdbID === index.imdbID) {
                            isFilmExist = true;
                            console.log("isFilmExist=true")
                        }
                    })
                    if (!isFilmExist) {
                        state.listFilm.push(index)
                        console.log("if !isFilmExist")
                    }
                }else{
                state.listFilm.push(index)
            }
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
              console.log("saveFilm in store")
        },
        deleteThisFilm({commit},index)
        {
            commit('deleteFilm',index)
        }
    }
})


export default store;