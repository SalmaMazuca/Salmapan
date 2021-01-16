<template>
    <v-layout row wrap>
        <v-flex xs4>
            <v-card>
                <v-card-title primary-title>
                    <div>
                      <div class="headline">{{ movie.name }}</div>
                      <span class="grey-text">{{ movie.release_year }} . {{ movie.genre }}
                          </span>
                    </div>
                </v-card-title>
                <!--h6 class="card-title" v-if="current_user">Reseñar esta película</h6>-->
                <h6 class="card-title"><v-btn flat @click="rate()">Reseñar esta película</v-btn></h6>
                <v-card-text>{{ movie.description }}</v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>

import axios from 'axios'
import Vue from 'vue'
import StarRating from 'vue-star-rating'

const wrapper = document.createElement('div')
// estado compartido
const state = {
  note: 0
}
// crear componentes de contenido
const RatingComponent = Vue.extend({
  data () {
    return { rating: 0 }
  },
  watch: {
    rating (newVal) { state.note = newVal }
  },
  template: `
  <div class="rating">
    ¿Cómo fue la experiencia que le provocó esta película?
    <star-rating v-model="rating" :show-rating="false"></star-rating>
  </div>`,
  components: { 'star-rating': StarRating }
})

const component = new RatingComponent().$mount(wrapper)

export default {
  name: 'Movie',
  data () {
    return {
      movie: []
    }
  },
  mounted () {
    this.fetchMovie()
  },
  methods: {
    async rate () {
      this.$swal({
        content: component.$el,
        buttons: {
          confirm: {
            value: 0
          }
        }
      }).then(() => {
        const movieId = this.$route.params.id
        return axios({
          method: 'post',
          data: {
            rate: state.note
          },
          url: `http://localhost:8081/movies/rate/${movieId}`,
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(() => {
            this.$swal(`¡Gracias por su reseña! ${state.note}`, 'success')
          })
          .catch((error) => {
            const message = error.response.data.message
            this.$swal('Error', `${message}`, 'error')
          })
      })
    },
    async fetchMovie () {
      return axios({
        method: 'get',
        url: `http://localhost:8081/api/movies/${this.$route.params.id}`
      })
        .then((response) => {
          this.movie = response.data
        })
        .catch(() => {

        })
    }
  }
}
</script>
