<template>
    <b-container >
        <b-row class="card" v-for="data in bus" v-bind:key="data.id" >
        
           
       <b-list-group>
        <b-list-group-item variant="primary"><h4>Bus  {{data.vehicle_num_plate}} </h4> </b-list-group-item>
          <b-list-group-item><strong>Direction:</strong> {{data.bus_direction}}</b-list-group-item>
           <b-list-group-item ><strong>Station Name:</strong> {{data.station_name}}</b-list-group-item>
           <b-list-group-item ><strong>Destination:</strong> {{data.destination_name}}</b-list-group-item>
           <b-list-group-item ><strong>Towards:</strong> {{data.towards}}</b-list-group-item>
           <b-list-group-item ><strong>Arrival time:</strong> {{data.expected_arrival}}</b-list-group-item>
        </b-list-group>
         
        </b-row>
    </b-container>
</template>

<script>
export default {
   name: "card",
   props: ["bus"]
}
</script>

<style scoped>

</style>