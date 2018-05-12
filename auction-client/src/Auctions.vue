<template>

  <div id="errorBox" v-if="errorFlag" style="color: red;">
    {{ error }}
  </div>

  <div v-else>
    <div>
      <h1>Auctions Page</h1>
    </div>

    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Title</th>
          <th>Reserve Price</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Current Bid</th>
        </tr>
        <tr v-for="auction in auctions">
          <td>{{ auction.id }}</td>
          <td>{{ auction.categoryTitle }}</td>
          <td>{{ auction.title }}</td>
          <td>${{ auction.reservePrice }}</td>
          <td>{{ getStringDate(auction.startDateTime) }}</td>
          <td>{{ getStringDate(auction.endDateTime) }}</td>
          <td>${{ auction.currentBid }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        error: "",
        errorFlag: false,
        auctions: []
      }
    },
    mounted: function() {
      this.getAuctions()
    },
    methods: {
      getAuctions: function() {
        this.$http.get('http://localhost:4941/api/v1/auctions')
          .then(function(response) {
            this.auctions = response.data;
          }, function(error) {
            this.error = error;
            this.errorFlag = true;
          });
      },
      getStringDate: function(time) {
        let date = new Date(time);
        return date.toDateString() + " " + date.toLocaleTimeString();
        // return date.getDay() + " " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      }
      // Insert additional functions here
    }
  }
</script>

<style>
  table,th,td {
    border: 1px black solid;
    padding: 2px;
  }
</style>
