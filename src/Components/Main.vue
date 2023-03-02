<template>


  <!--    <div @submit.prevent>-->
  <div class="main-layer">
    <header>
<!--      <div>-->
<!--        <img src="../assets/images/Godzilla_full.jpeg">-->
<!--      </div>-->

      <h1 class="title">Search for a movie by name</h1>

          <div class="input-search">
            <input class="input" type="text"
                      v-bind:placeholder="placeholderString"
                      v-on:input="inputChangeHandler"
                      v-on:keypress.enter="search">
            <button class="btn-search" v-on:click="search">Поиск</button>
          </div>
      <button
          class="btn" v-if="($store.state.listFilm.length)"
          @click="go_To_listFilm(index)">
          Избранное {{$store.state.listFilm.length}}
      </button>
    </header>
    <h2 style="text-align: center">{{nameFilm}}</h2>
    <ul class="list">
        <li class="list-item" v-for="item in main_list_film">
        <img :src=item.Poster alt="Постер отсутствует">
        <div class="info">
          <p class="about">{{item.Title}} Год: {{item.Year}} Жанр:{{item.Type}}</p>

          <label>
            <input class="checkbox" type="checkbox" v-bind:value="item" v-model="what">
            "Хочу посмотреть"
          </label>
          <button class="btn-card" @click="save(item, index)">Добавить в избранное</button>
        </div>

      </li>
      <button @click="addToFavorites">Добавить в избранное</button>
    </ul>
    <!--    <p>{{aboutFilm}}</p>-->
    <footer>This footer</footer>
  </div>

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
      what:[],
      placeholderString: "Введите название фильма",
      inputValue:"spi",
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
      'add_to_favorites'
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
        this.nameFilm = "Фильм не найден!"
        this.inputValue = ""
      }else {
        console.log(5555, this.dat)
        this.nameFilm = this.inputValue
        this.$store.state.mainListFilm.push(this.dat)
        console.log(this.$store.state.mainListFilm)
        // this.aboutFilm = dat.Plot
        this.inputValue = ""
      }
    },
    save (index,key) {
      console.log ("what", this.what),
      console.log(1111, this)
      this.saveFilm(index)
      console.log(index)
      console.log(777777, this.$store.state.listFilm)
      console.log("key",key)
    },

    addToFavorites() {
      // this.add_to_favorites
     this.$store.state.listFilm.push(this.what)
     },


    inputChangeHandler(event) {
      this.inputValue = event.target.value
    }
  }
}
</script>

<style scoped>

</style>