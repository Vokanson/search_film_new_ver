<template>
<!--  <div @submit.prevent>-->
    <div>
      <a >{{ this.listFilm }}</a>
    <h1><strong>Поиск фильма по названию</strong></h1>
    <input type="text" placeholder="Введите название фильма"
           v-on:input="inputChangeHandler">
    <button v-on:click="search">Поиск</button>
    <ul class="list" >
      <li class="list-item" v-for="(item, index) in dat"  >
        {{item.Title}} {{item.Year}} <img :src=item.Poster>
        <button @click="save(index)">Добавить в избранное</button>
      </li>
    </ul>
    <p>{{aboutFilm}}</p>
  </div>

</template>

<script>
import favorites from "@/Components/favorites.vue";
import axios from "axios"
export default {
  components:{
    favorites
  },
  data() {
    return {
      inputValue:"spi",
      listFilm: [],
      nameFilm: "",
      aboutFilm: "",
      dat: []
    }
  },
  methods: {
    save (index) {
          console.log(1111, this)
          console.log('save', )
          this.listFilm.push(this.dat[index].Title)
          console.log(2222, this.listFilm)
        },

    async search() {
          const films = this.inputValue
          const res = await axios.get(`http://www.omdbapi.com/?apikey=922db138&s=${films}`)
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