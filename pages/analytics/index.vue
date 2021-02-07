<template>
  <div>
    <h2>analytics</h2>
    <button @click="auth().then(client)">LOAD</button>
    <button @click="execute()">execute</button>
    <div>
      <chart
            :chartType="chartType"
            :chartData="chartData"
          />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Chart from '@/components/atoms/Chart.vue'

export default {
  components: {
    Chart,
  },
  head() {
    return {
      script: [
        {
          src: "https://apis.google.com/js/api.js",
        },
      ],
    };
  },
  data() {
    return {
      info: null,
      chartType: 'PieChart',
      chartData: null,
      gapi: null,
      authapi: "https://www.googleapis.com/auth/yt-analytics.readonly",
      clientapi:
        "https://youtubeanalytics.googleapis.com/$discovery/rest?version=v2",
      clientId:
        "859096391766-ik5strbkceh9gvg6f07pt3a6kt31k75h.apps.googleusercontent.com",
      params: {
        ids: "channel==MINE",
        startDate: "2020-01-01",
        endDate: "2020-12-31",
        metrics:
          "views,estimatedMinutesWatched,averageViewDuration,averageViewPercentage,subscribersGained",
        dimensions: "day",
        sort: "day",
      },
    };
  },

  mounted() {
    this.gapi = window.gapi;
    console.log("gapi", gapi);
    gapi.load("client:auth2", function () {
      gapi.auth2.init({
        client_id:
          "859096391766-ik5strbkceh9gvg6f07pt3a6kt31k75h.apps.googleusercontent.com",
      });
    });
  },

  methods: {
    auth: function authenticate() {
      return (
        gapi.auth2
          .getAuthInstance()
          .signIn({scope: "https://www.googleapis.com/auth/yt-analytics.readonly"})
          // axios.get(this.authapi)
          .then(function () {
            console.log("sign in");
          })
          .catch(function (err) {
            console.log("signin error", err);
          })
      );
      // .then(function() {
      //     console.log('sign in')
      // }, function(err) {
      //     console.log('error', err)
      // })
    },
    client: function loadClient() {
      return gapi.client.load(this.clientapi).then(
        function () {
          console.log("client load", gapi);
        },
        function (err) {
          console.log(" error client load", err);
        }
      );
    },
    execute: function execute() {
      return gapi.client.youtubeAnalytics.reports
        .query({
          ids: "channel==MINE",
          startDate: "2020-01-01",
          endDate: "2020-10-31",
          metrics:
            // "views,estimatedMinutesWatched,averageViewDuration,averageViewPercentage,subscribersGained",
            "views,likes,shares",
          dimensions: "day",
          sort: "day",
        })
        .then(
          function (response) {
            console.log("response", response.result.columnHeaders);
            // this.info = response;
            this.columu = response.result.columnHeaders
            this.columu = this.chartData
          },
          function (err) {
            console.log("error response", err);
          }
        );
    },
    // initialize: function initialize () {
    //     gapi.load('client:auth2', function () {
    //         gapi.auth2.init({client_id: '859096391766-ik5strbkceh9gvg6f07pt3a6kt31k75h.apps.googleusercontent.com'})
    //     })
    // }
  },
};
</script>