<template>
  <div class="promo">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 header-promo">
          <h2 class="text-center">Movie List</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mx-auto">
          <div class="form-search">
            <div class="row">
              <div class="col-md-8">
                <vue-bootstrap-typeahead
                  v-model="search"
                  :data="searchList"
                  size="sm"
                  :serializer="item => item.title"
                  placeholder="Cari Film"
                  @hit="onSelectedSearchData"
                  @keydown.enter.native="onEnterHandler"
                >
                  <template slot="append">
                    <b-input-group-text>
                      <b-spinner variant="secondary" v-show="spinnerShow" small></b-spinner>
                    </b-input-group-text>
                  </template>
                  <template slot="suggestion" slot-scope="{ htmlText }">
                    <span v-html="htmlText"></span>
                  </template>
                </vue-bootstrap-typeahead>
              </div>
              <div class="col-md-4">
                <b-button block variant="danger" size="sm" @click="onClearSearch">clear search</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mx-auto mt-1">
          <div class="filter-date">
            <div class="row ">
              <div class="col-md-8">
                <b-form-datepicker @input="getListFilterByDate"
                                   :date-format-options="{ year: 'numeric', month: '2-digit', day: '2-digit' }"
                                   locale="id"
                                   size="sm" id="date-from"
                                   v-model="dateFrom" :placeholder="'Tanggal Tayang'"></b-form-datepicker>
              </div>
              <div class="col-md-4">
                <b-button block variant="danger" size="sm" @click="onClearDate">clear date</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="content-list">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-6 mt-3"
                   v-for="(item, index) in listFiltered" :key="index">
                <b-card
                  class="card-movie"
                >
                  <b-card-img-lazy :src="item.image"></b-card-img-lazy>
                  <b-card-text class="text-center">
                    <p><strong>{{ item.title }}</strong></p>
                    <p><strong>{{ item.showTime | date('DD MMMM YYYY HH:mm') }}</strong></p>
                  </b-card-text>
                  <div class="text-center">
                    <b-button href="#" :to="`movie/${item.id}`" variant="primary">Detail</b-button>
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
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import debounce from 'lodash.debounce'

// import service
import MoviesService from '../services/MoviesService'

const movieService = MoviesService.build()

export default {
  name: 'Home',
  components: {
    VueBootstrapTypeahead
  },
  filters: {
    date
  },
  data () {
    return {
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
    this.getListMovie()
  },
  watch: {
    search: debounce(function () {
      this.getSearchList()
    }, 300)
  },
  methods: {
    async getListMovie () {
      const res = await movieService.getListMovie(Object.assign({}))
      const { data } = res
      this.listMovie = data
      this.listFiltered = this.listMovie
    },

    getListFilterByDate () {
      const res = this.listMovie.filter(item => {
        return date(item.showTime, 'DD/MM/YYYY') === date(this.dateFrom, 'DD/MM/YYYY')
      })
      this.listFiltered = res
    },

    onClearDate () {
      this.dateFrom = ''
      this.listFiltered = this.listMovie
    },

    onClearSearch () {
      this.search = ''
      this.listFiltered = this.listMovie
    },

    onSelectedSearchData () {
      if (this.searchList.length > 0) {
        const res = this.listMovie.filter(item => {
          return item.title === this.search
        })
        this.listFiltered = res
      }
    },
    async getSearchList () {
      this.spinnerShow = true
      const res = this.listMovie
      this.spinnerShow = false

      this.searchList = []
      if (res.length > 0) {
        res.forEach(item => {
          this.searchList.push(item)
        })
      }
    },
    onEnterHandler () {
      const res = this.listMovie.filter(item => {
        return item.title.toLowerCase().includes(this.search.toLowerCase())
      })
      this.listFiltered = res
    }
  }
}
</script>
