<template>


  <!--    <div @submit.prevent>-->
  <div>

    <p>
      <button class="btn" @click="go_To_listFilm(index)">Избранное {{$store.state.listFilm.length}}</button>
<!--      <router-link :to="{name: 'favorites', params: {this:'listFilm'}}">-->
<!--        Избранное: {{listFilm.length}}-->
<!--      </router-link>-->
    </p>
<!--          <favorites v-bind:listFilm="listFilm"/>-->
    <!--      <router-view/>-->
    <!--      <a >{{ this.listFilm }}</a>-->
    <h1 style="text-align: center"><strong>Поиск фильма по названию</strong></h1>
    <div class="input-search">
      <input class="input" type="text"
                v-bind:placeholder="placeholderString"
                v-on:input="inputChangeHandler"
                v-on:keypress.enter="search">
      <button class="btn-search" v-on:click="search">Поиск</button>
    </div>

    <h2 style="text-align: center">{{nameFilm}}</h2>
    <ul class="list">
      <li class="list-item"  v-for="(item, index) in $store.state.mainListFilm[0]" >
        <p class="about">{{item.Title}} Год: {{item.Year}}</p> <img :src=item.Poster>
        <button class="btn-card" @click="save(item, index)">Добавить в избранное</button>
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
import {mapActions} from 'vuex'
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
      placeholderString: "Введите название фильма",
      inputValue:"terminator",
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
      'saveFilm'
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
      if (res.data.Error === "Movie not found!") {
        this.nameFilm = "Фильм не найден!"
        this.inputValue = ""
      }
      else {
        console.log(5555, this.dat)
        this.nameFilm = this.inputValue
        this.$store.state.mainListFilm.push(this.dat)
        console.log(this.$store.state.mainListFilm)
        // this.aboutFilm = dat.Plot
        this.inputValue = ""
      }
    },
    save (index) {
      console.log(1111, this)
      this.saveFilm(index)
      console.log(index)
      console.log(777777, this.$store.state.listFilm)
      // if(this.$store.state.listFilm[index]==this.$store.state.mainListFilm[0][index]){
      //   console.log('===')
      //   return
      // }else{
      //   this.$store.state.listFilm.push(this.$store.state.mainListFilm[0][index])
      //   console.log('!==')
      // }
      // console.log('save', )
      // this.listFilm.push(this.dat[index])
     // console.log(2222, this.listFilm)

    },


    inputChangeHandler(event) {
      this.inputValue = event.target.value
    }
  }
}
</script>

<style scoped>
.btn-card {
  width: fit-content;
}
.input-search {
  justify-content:center;
  /*align-items:center*/
  /*float: inherit;*/
  display: flex;
}
.input {
  width: 50%;
  height: 20px;
  display:inline;
  justify-content:center;
  align-items:center;
  /*background-color: aqua;*/
}
.btn-search {
  /*display: inline-flex;*/
  float: inherit;
  height: 26px;
  width: 80px;
}
.btn {
  float: right;
}
.list {
  /*padding-inline-start: 100px;*/
  /*margin: auto;*/
  /*height: 100%;*/
  /*width: 100%;*/
  padding: 0px;
  /*display: inline-block;*/
  /*align-items: center;*/

  text-align: center;
  display: block;
  justify-content:center;
}
.list>li {
  max-width: 187px;
  max-height: 543px;
}

.list-item {
  position: relative;
   justify-content:center;
  padding: 10px;
  display: inline-block;
  box-sizing: border-box;
}
.list-item>img {
  /*vertical-align:middle;*/
  max-width: 178px;
  max-height: 243px;
}
.about {
  /*max-width: 150px;*/
  /*width: fit-content;*/
  color: aliceblue;
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*background: aliceblue;*/
}
</style>