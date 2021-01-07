<template>
  <div class="promo">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 header-promo">
          <h2 class="text-center">Detail Movie</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="content-list">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 mt-3 mx-auto">
                <b-card
                  class="card-movie"
                >
                  <b-card-img-lazy :src="detailMovie.image"></b-card-img-lazy>
                  <b-card-text class="text-center">
                    <h2><strong>{{ detailMovie.title }}</strong></h2>
                    <p>Show: <strong>{{ detailMovie.showTime | date('DD MMMM YYYY HH:mm') }}</strong></p>
                    <h3><span class="text-danger">&hearts;</span> {{ detailMovie.like }}</h3>
                  </b-card-text>
                  <div class="text-center">
                    <b-button href="#" :to="`/`" variant="primary">Kembail</b-button>
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
  name: 'Detail',
  filters: {
    date
  },
  data () {
    return {
      detailMovie: '',
      listMovie: [],
      listFiltered: [],
      keyword: '',
      dateFrom: '',
      dateTo: '',
      search: '',
      searchList: [],
      spinnerShow: false,
      isBusyCheckCoverage: false
    }
  },
  created () {
    this.getDetailMovie()
  },
  methods: {
    async getDetailMovie () {
      const res = await movieService.getDetailMovie(Object.assign({}), this.$route.params.id)
      const { data } = res
      this.detailMovie = data
    }
  }
}
</script>
