<template>
<!--  <div @submit.prevent>-->
    <div>
    <favorites/>
    <h1><strong>Поиск фильма по названию</strong></h1>
    <input type="text" placeholder="Введите название фильма"
           v-on:input="inputChangeHandler">
    <button v-on:click="search">Поиск</button>
    <ul class="list" >
      <li class="list-item" v-for="f in dat.Search"  >
        {{f.Title}} {{f.Year}} <img :src=f.Poster> <button @click="save">Добавить в избранное</button>
      </li>
    </ul>
    <p>{{aboutFilm}}</p>
  </div>

</template>

<script>
import favorites from "@/Components/favorites.vue";
export default {
  components:{
    favorites
  },
  data() {
    return {
      listFilm: [],
      nameFilm: "",
      aboutFilm: "",
      dat: []
    }
  },
  methods: {
    save:
        async function(Title) {
          console.log('save', Title)
          this.listFilm.push(Title)
          console.log(this.listFilm)
        },

    search:
        async function () {
          const films = this.inputValue
          const res = await fetch(`http://www.omdbapi.com/?apikey=922db138&s=${films}`)
          console.log (res)
          this.dat = await res.json()
          this.nameFilm = this.inputValue
          // this.aboutFilm = dat.Plot
          console.log(this.dat)
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