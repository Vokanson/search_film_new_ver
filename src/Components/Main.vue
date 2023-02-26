<template>


  <!--    <div @submit.prevent>-->
  <div class="main-layer">
    <header>

      <h1 class="title">Search for a movie by name</h1>

          <div class="input-search">
            <input class="input" type="text"
                      v-bind:placeholder="placeholderString"
                      v-on:input="inputChangeHandler"
                      v-on:keypress.enter="search">
            <button class="btn-search" v-on:click="search">Поиск</button>
          </div>
      <button class="btn" @click="go_To_listFilm(index)">Избранное {{$store.state.listFilm.length}}</button>
    </header>
    <h2 style="text-align: center">{{nameFilm}}</h2>
    <ul class="list">
      <li class="list-item"  v-for="(item, index) in $store.state.mainListFilm[0]">
        <img :src=item.Poster alt="Постер отсутствует">
        <div class="info">
          <p class="about">{{item.Title}} Год: {{item.Year}} Жанр:{{item.Type}}</p>

          <input class="checkbox" type="checkbox" :id="item.imdbID" v-model="what[item.imdbID]">
          <label :for="item.imdbID" >{{item.imdbID}}</label>
          <button class="btn-card" @click="save(item, index)">Добавить в избранное</button>
        </div>

      </li>
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
    save (index) {
      console.log ("what", this.what),
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

.main-layer {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header {
  display: flex;
  justify-content: space-between;
  /*padding-left: 15px;*/
  /*padding-top: 14px;*/
  background: #283036;
  /*opacity: 0.8;*/
  font-size: 30px;
  height: 73px;
  width: 100%;
  position: absolute;
  color: white;
}
.title {
  /*margin: 0;*/
  padding-left: 25px;
  font-size: 30px;
  /*display: contents;*/
  /*padding-left: 95px;*/
}
h2 {
  margin-bottom: 0;
  margin-top: 98px;
}

.input-search {
  justify-content:center;
  /*align-items:center*/
  /*float: inherit;*/
  display: flex;
}
.input {
  /*margin-left: 411px;*/
  top: 17px;
  color: white;
  position: absolute;
  width: 278px;
  height: 29px;
  padding-left: 10px;
  display:inline;
  /*justify-content:center;*/
  /*align-items:center;*/
  border-radius: 13px;
  background: #283036;
}
.btn-search {
  top:20px;
  position: absolute;
  width: 83.43px;
  height: 29px;
  margin-left: 203px;
  /*margin-top: 3px;*/
  /*left: 930.19px;*/
  /*float: right;*/
  display: inline;
  /*justify-content:center;*/
  /*align-items:center;*/
  background: #FF6E30;
  border-radius: 8px;
   /*float: inherit;*/
  /*height: 26px;*/
  /*width: 80px;*/
}
.btn {
  /*position: absolute;*/
  margin-top:10px;
  margin-right: 10px;
  width: 95px;
  height: 48px;
  left: 464.19px;
  top: 476px;

  background: #FF6E30;
  border-radius: 8px;
  /*align-items: center;*/
  /*float: right;*/
  /*position: relative;*/
}
.list{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /*background: black;*/
  /*padding-inline-start: 100px;*/
  margin: 21px;
  margin-top: 0;
  /*height: 100%;*/
  /*width: 100%;*/
  padding: 0px;
  /*display: inline-block;*/
  /*align-items: center;*/

  text-align: center;
  /*display: flex;*/
  flex-wrap: wrap;
  justify-content:center;
}
.list>li {

  max-width: 187px;
  max-height: 543px;
}

.list-item {
  margin: 40px;
  position: relative;
  justify-content:center;

  /*padding: 10px;*/
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

}
.list-item>img {
  /*vertical-align:middle;*/
  /*max-width: 178px;*/
  /*max-height: 243px;*/

  font-weight: 300;
  line-height: 2;
  text-align: center;
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
}

img:before {
  content:"";
  justify-content: center;
  display: block;
  margin-bottom: -131px;
  background-color: rgb(230, 230, 230);
  width: 100%;
  height: 100%;
}


.btn-card {
  bottom: 19px;
  display: flex;
  position: absolute;
  /*width: -webkit-fill-available;*/
}

.about {
  /*max-width: 150px;*/
  /*width: fit-content;*/
  color: aliceblue;
  position: absolute;
  border-radius: 8px;
}
footer {
  margin-top: auto;
  background: #283036;
  height: 70px;
  width: 100%;
  color: aliceblue;
  border: white;
  /*position: absolute;*/
  /*top:1000px;*/
  left: 0px;
  right: 0px;
  font-size: 50px;
}


</style>