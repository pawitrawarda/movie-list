<template>
  <div class="promo">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 header-promo">
          <h2 class="text-center">Movie List</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="content-promo">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-6 mt-3"
                   v-for="(item, index) in listMovie" :key="index">
                <b-card
                  class="card-promo"
                >
                  <b-card-img-lazy :src="item.image"></b-card-img-lazy>
                  <b-card-text class="text-center">
                    <p><strong>{{ item.title }}</strong></p>
                    <p><strong>{{ item.showTime | date('DD MMMM YYYY HH:mm') }}</strong></p>
                  </b-card-text>
                  <div class="text-center">
                    <b-button href="#" to="/detailpromo" variant="primary">Detail</b-button>
                  </div>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import library
import { date } from '../commons/helper/filter'

// import service
import MoviesService from '../services/MoviesService'

const movieService = MoviesService.build()

export default {
  name: 'Home',
  filters: {
    date
  },
  data () {
    return {
      listMovie: []
    }
  },
  created () {
    this.getListMovie()
  },
  methods: {
    async getListMovie () {
      const res = await movieService.getListMovie(Object.assign({}))
      const { data } = res
      this.listMovie = data
    }
  }
}
</script>
