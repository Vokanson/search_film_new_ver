<template>


  <!--    <div @submit.prevent>-->
  <div>

    <p>
      <button @click="go_To_listFilm(index)">Избранное {{listFilm.length}}</button>
<!--      <router-link :to="{name: 'favorites', params: {this:'listFilm'}}">-->
<!--        Избранное: {{listFilm.length}}-->
<!--      </router-link>-->

    </p>




<!--          <favorites v-bind:listFilm="listFilm"/>-->
    <!--      <router-view/>-->
    <!--      <a >{{ this.listFilm }}</a>-->
    <h1><strong>Поиск фильма по названию</strong></h1>
    <input type="text"
           v-on:input="inputChangeHandler"
           v-on:keypress.enter="search">
    <button v-on:click="search">Поиск</button>
    <ul class="list" >
      <li class="list-item" v-for="(item, index) in dat"  >
        {{item.Title}} {{item.Year}} <img :src=item.Poster>
        <button @click="save(index)" >Добавить в избранное</button>

      </li>
    </ul>
    <!--    <p>{{aboutFilm}}</p>-->
  </div>

</template>

<script>
// import favorites from "@/Components/favorites.vue";
import axios from "axios"
import Favorites from "@/Components/favorites.vue";
import {createRouter as $router} from "vue-router";
import index from "vuex";
// import favorites from "./favorites.vue";
export default {
  computed: {
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
      inputValue:"terminator",
      listFilm:[],
      nameFilm: "",
      aboutFilm: "",
      dat: []
    }
  },
  methods: {
    // favorites() {
    //   return favorites
    // },
    go_To_listFilm(index){
      this.$router.push('/favorites')
      this.$store.state.listFilm.push(this.listFilm)
    },
    save (index) {
      console.log(1111, this)
      console.log('save', )
      this.listFilm.push(this.dat[index].Title)
      console.log(2222, this.listFilm)
    },

    async search() {
      const films = this.inputValue
      const res = await axios.get(`http://www.omdbapi.com/?apikey=922db138&s=${films}`)
      console.log(3333,res)
      this.dat = await res.data.Search
      console.log(5555,this.dat)
      this.nameFilm = this.inputValue
      // this.aboutFilm = dat.Plot

      this.inputValue = ""
    },
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    }
  }
}
</script>

<style scoped>

</style>