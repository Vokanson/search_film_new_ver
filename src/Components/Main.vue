<template>

  <div class="main-layer">



    <nav class="nav">
      <div class="logo">
        <img src="../assets/images/Godzilla.jpeg"> Godzilla
      </div>
      <div class="nav-btn-center">
        <button>Home</button>
        <button>Categories</button>
        <button
            class="btn"
          @click="addToFavorites(index)">
          Add to favorites
        </button>
        <button
          class="btn"
          @click="go_To_listFilm(index)">
          Favorites {{list_film.length}}
        </button>
      </div>
      <div class="nav-btn-right">
        <button class="login">Login</button>
        <button class="signUp">Sign Up</button>
      </div>

    </nav>

    <header>
      <h1 class="title">Godzilla is a movie search service by name</h1>
      <img class="header-logo" src="../assets/images/Godzilla_full.jpeg">
    </header>



    <div class="input-search">
      <input class="input" type="text"
             v-bind:placeholder="placeholderString"
             v-on:input="inputChangeHandler"
             v-on:keypress.enter="search">
      <img class="search-logo" src="../assets/images/search.png">
      <button class="btn-search" v-on:click="search">Search</button>
    </div>



    <content class="content">
      <h2 style="text-align: center">{{nameFilm}}</h2>
      <ul class="list">
        <li class="list-item" v-for="item in main_list_film" :key="item.imdbID">
          <img :src=item.Poster alt="The poster is missing">
          <div class="info">
            <p class="about">{{item.Title}} Year: {{item.Year}} Genre:{{item.Type}} </p>

            <label class="label">
              <input class="checkbox" type="checkbox" v-bind:value="item" v-model="$store.state.what">
              I want to see
            </label>
            <!--          <button class="btn-card" @click="save(item, index)">Добавить в избранное</button>-->
          </div>

        </li>

      </ul>
      <!--    <p>{{aboutFilm}}</p>-->
    </content>
  </div>
    <footer>This footer</footer>


</template>

<script>
// import favorites from "@/Components/favorites.vue";
import axios from "axios"
import Favorites from "@/Components/favorites.vue";
import {createRouter as $router} from "vue-router";
import index from "vuex";
import {mapActions} from 'vuex'
import {mapGetters} from "vuex";
// import favorites from "./favorites.vue";
export default {
  computed: {
    ...mapGetters([
        'list_film',
        'main_list_film'
    ]),
    index() {
      return index
    }
  },
  components: {Favorites},
  // components:{
  //   favorites
  // },
  data() {
    return {
      // what:[],
      placeholderString: "Enter the name of the movie",
      inputValue:"spider man",
      // listFilm:[],
      nameFilm: "",
      aboutFilm: "",
      dat: []
    }
  },
  // mounted() {
  //   if(localStorage.nameFilm) this.nameFilm =
  //       localStorage.nameFilm
  // },
  // watch:{
  //   nameFilm(newNameFilm) {
  //     localStorage.nameFilm = newNameFilm
  //   }
  // },
  methods: {

    ...mapActions([
      'clearListFilm',
      'saveFilm',
      // 'add_to_favorites'
    ]),
    // saveFilm(index) {
    //   // return state.listFilm.splice(index)
    //   // console.log(state.listFilm)
    //   this.saveListFilm(index)
    //   console.log(index)
    // }
    // favorites() {
    //   return favorites
    // },
    go_To_listFilm(index){
      this.$router.push('/favorites')

    },
    async search() {
      this.clearListFilm()
      const films = this.inputValue
      const res = await axios.get(`http://www.omdbapi.com/?apikey=922db138&s=${films}`)
      console.log(3333,res)
      this.dat = await res.data.Search
      if (res.data.Response ==='False') {
        this.nameFilm = "The movie was not found!"
        this.inputValue = ""
      }else {
        console.log(5555, this.dat)
        this.nameFilm = this.inputValue
        this.$store.state.mainListFilm.push(this.dat)
        console.log(this.main_list_film)
        // this.aboutFilm = dat.Plot
        this.inputValue = ""
      }
    },
    // save (index,key) {
    //   console.log ("what", this.what)
    //   console.log(1111, this)
    //   this.saveFilm(index)
    //   console.log(index)
    //
    //   console.log("key",key)
    // },

    addToFavorites(index) {
      // console.log('key',key)
      // this.add_to_favorites
      this.saveFilm(index)
     // this.$store.state.listFilm.push(this.what)
      console.log(777777, this.$store.state.listFilm)

     },


    inputChangeHandler(event) {
      this.inputValue = event.target.value
    }
  }
}
</script>

<style scoped>

</style>