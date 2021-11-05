<template>
<b-container>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th class="table-active">Timestamp</th>
          <th class="table-active">Numb Plate</th>
          <th class="table-active">Bus ID</th>
          <th class="table-active">Station</th>
          <th class="table-active">Destination</th>
        </tr>
      </thead>

      <tbody>
        <tr class="table-row" v-for="row in data" v-bind:key="row.id">
          <td>{{row.timestamp}}</td>
          <td>{{row.vehicle_num_plate}}</td>
          <td>{{row.line_name}}</td>
          <td>{{row.station_name}}</td>
          <td>{{row.destination_name}}</td>
        </tr>
      </tbody>
    </table>

  </div>
  </b-container>
</template>

<script>
export default {
  name: "table",
  props: ["data"]
};
</script>

<style scoped>

</style>
