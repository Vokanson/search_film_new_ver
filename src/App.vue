<template>
<h1><strong>Поиск фильма по названию</strong></h1>
  <input type="text" placeholder="Введите название фильма"
         v-on:input="inputChangeHandler">
  <button v-on:click="search">Поиск</button>
  <ul class="list" >
    <li class="list-item" v-for="f in dat.Search"  >
      {{f.Title}} {{f.Year}} <img :src=f.Poster>
    </li>
  </ul>
  <p>{{aboutFilm}}</p>
</template>

<script>
export default {
  data() {
    return {

      nameFilm: "",
      aboutFilm: "",
      dat: []
    }
  },
  methods: {
    search:
        async function () {
          const films = this.inputValue
          const res = await fetch(`http://www.omdbapi.com/?apikey=922db138&s=${films}`)
          this.dat = await res.json()
          this.nameFilm = this.inputValue
          // this.aboutFilm = dat.Plot
          console.log(this.dat)
        },
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    }
  }
}
</script>

<style scoped>

</style>