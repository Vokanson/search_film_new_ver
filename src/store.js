import index, {createStore} from 'vuex'

const store = createStore({
    state(){
        return{
            listFilm: [],
            mainListFilm: [],
            what: []
        }
    },
    mutations: {
        cleanList:(state)=>{
            return state. mainListFilm.splice(0)
            // console.log(state.listFilm)
            // console.log(index)
        },
        saveSelectedFilm:(state,index)=>{
            console.log('what', state.what)
            state.listFilm.push(...state.what.filter(n => !state.listFilm.some(m => m.imdbID === n.imdbID)));
            state.what = []
        },


        //     if(state.listFilm.length) {
        //         console.log("saveSelectedFilm in store")f
        //         let isFilmExist = false;
        //             console.log("if in store")
        //             state.listFilm.map(function (item,) {
        //                 console.log("items:", item.imdbID,index.imdbID)
        //                 if(item.imdbID === index.imdbID) {
        //                     isFilmExist = true;
        //                     console.log("isFilmExist=true")
        //                 }
        //             })
        //             if (!isFilmExist) {
        //                 state.listFilm.push(index)
        //                 console.log("if !isFilmExist")
        //             }
        //         }else{
        //         state.listFilm.push(index)
        //     }
        // },
        //


        // saveFilmToListFilm:(state,what)=> {
        //     state.listFilm.push(this.what)
        // },
        deleteFilm:(state, index)=>{
            return state.listFilm.splice(index,1)
            // console.log($store.state.listFilm)
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
        },

        // add_to_favorites({commit},what) {
        //     commit('saveFilmToListFilm')
        // }
    },
    getters: {
        list_film (state){
            return state.listFilm
        },
        main_list_film (state) {
            return state.mainListFilm[0]
        }
    },
})


export default store;