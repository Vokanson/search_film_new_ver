<template>
<!--  <ul class="list">-->
<!--    <li class="list-item" v-for="(film, index) in listFilm">-->
<!--      {{listFilm [0]}} Вот здесь</li>-->
<!--  </ul>-->

  <div>
<h1>Папка избранное</h1>


    <ul class="list" >
      <li  v-for="(item,index) in $store.state.listFilm"  >
        {{item.Title}} Год: {{item.Year}} <img :src=item.Poster>
        <button @click="deleteFilm">Удалить</button>
      </li>
    </ul>
<!--<div>{{this.$store.state.listFilm}}</div>-->

<!--    <button>Избранное</button>-->

  </div>


</template>

<script>
import index from "vuex";

export default {
  name: "favorites",
  computed: {
    index() {
      return index
    }
  },
props:{
    // listFilm:{
    //   type: Array,
    //   require: true,
    //
    // }

},
  data () {
    return {
    }
},
  methods:{
    deleteFilm (index){
      this.$store.state.listFilm.splice(index,1)
      console.log(this.$store.state.listFilm)
    }
  }

}
</script>

<style scoped>

</style>