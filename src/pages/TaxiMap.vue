<template>
  <div>
    <map-header title="Taxis"/>

    <map-with-markers
      icon="statics/marker-taxis.png"
      :markers="stops"
      :infoWindowContentFormatter="infoWindowContentFormatter">
    </map-with-markers>
  </div>
</template>

<script>
import { retrieveAllTaxiStops } from '../../src/core/commands'

import MapWithMarkers from '../components/MapWithMarkers'
import MapHeader from '../components/MapHeader'

export default {
  components: {
    MapWithMarkers,
    MapHeader
  },
  data () {
    return {stops: []}
  },
  async beforeCreate () {
    this.stops = await retrieveAllTaxiStops()
  },
  methods: {
    infoWindowContentFormatter (selected) {
      return selected.title
    }
  }
}
</script>

<style>
</style>
