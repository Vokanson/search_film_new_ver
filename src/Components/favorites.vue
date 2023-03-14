<template>
<!--  <ul class="list">-->
<!--    <li class="list-item" v-for="(film, index) in listFilm">-->
<!--      {{listFilm [0]}} Вот здесь</li>-->
<!--  </ul>-->

  <div class="favorites">  <p>Папка избранное</p>
    <h1 class="title"  v-if="$store.state.listFilm.length===0">Вы пока ничего не добавили</h1>


    <ul class="list" v-else>

      <li class="list-item" v-for="(item,index) in $store.state.listFilm"  >
        {{item.Title}} Год: {{item.Year}} Жанр:{{item.Type}}<img :src=item.Poster>
        <button @click="deleteFilm(index)">Удалить</button>
      </li>
    </ul>
<!--<div>{{this.$store.state.listFilm}}</div>-->

<!--    <button>Избранное</button>-->

  </div>


</template>

<script>
import index from "vuex";
import {mapActions} from 'vuex'

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
    ...mapActions([
      'deleteThisFilm'
    ]),
    deleteFilm(index) {
      // return state.listFilm.splice(index)
      // console.log(state.listFilm)
      this.deleteThisFilm(index)
      console.log(index)
    }
  }
}
</script>

<style scoped>
.favorites>p {
  font-size: 25px;
}
.title {
  position: static;
  width: 455px;
  height: 62px;
  left: 493px;
  top: 900px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 130%;
  /* or 62px */
  text-align: center;
  /*color: rgba(255, 255, 255, 0.9);*/

}
/*.list {*/
/*  display: block;*/
/*  border: 1px solid #b5e9a7;*/
/*  border-radius: 3px;*/
/*  position: inherit;*/
/*  background: #fff;*/
/*  margin: 0 20px 20px 0;*/
/*  text-decoration: none;*/
/*  color: #474747;*/
/*  z-index: 0;*/
/*  height: 300px;*/
/*}*/
  .list-item {
  /*  margin-right: 20px;*/
  /*  position: fixed;*/
  /*  bottom: 5px;*/
  /*  margin: auto;*/
    padding: 10px;
    display: inline-grid;
    box-sizing: border-box;
  }

</style>