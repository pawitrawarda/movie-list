<template>
  <div>
    <v-select :class="stateData ? '' : 'error'"
              ref="vSelect" :value="value"
              @input="setSelectedInput($event)"
              :options="data"
              :placeholder="placeholder"
              :searchable="searchable">
    </v-select>
    <span v-show="!state" class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
  name: 'VSelect2',
  data () {
    return {
      stateData: true
    }
  },
  props: {
    data: Array,
    placeholder: String,
    searchable: {
      type: Boolean,
      default: true
    },
    value: {
      type: Object,
      default: null
    },
    state: {
      type: Boolean,
      default: true
    },
    errorMessage: String
  },
  watch: {
    state: function () {
      this.stateData = this.state
    }
  },
  methods: {
    setSelectedInput (evt) {
      this.$emit('input', evt)
    }
  },
  components: {
    vSelect
  },
  mounted: function () {
  }
}
</script>
