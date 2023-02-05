<template>
<!--  <ul class="list">-->
<!--    <li class="list-item" v-for="(film, index) in listFilm">-->
<!--      {{listFilm [0]}} Вот здесь</li>-->
<!--  </ul>-->

  <div>
<h1>Папка избранное</h1>

<div>{{$store.state.listFilm}}</div>

<!--    <button>Избранное</button>-->
  </div>


</template>

<script>
export default {
  name: "favorites",
props:{
    listFilm:{
      type: Array,
      require: true,

    }

},
  data () {
    return {
    }
},
  methods:{

  }

}
</script>

<style scoped>

</style>