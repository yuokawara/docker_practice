<template>
  <div>test</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      sandboxUrl: "https://connect.squareupsandbox.com",
      sandboxToken:
        "EAAAELQJmX8m2hz9dOne12YEI_G5AkM0QecaMc-2SN3LicVwshaEYvoL8-MQwR6z",
    };
  },

  mounted() {
    // const SquareConnect = require("square-connect");
    // SquareConnect.ApiClient.instance.authentications.oauth2.accessToken =
    //   "EAAAELQJmX8m2hz9dOne12YEI_G5AkM0QecaMc-2SN3LicVwshaEYvoL8-MQwR6z";

    // let api = new SquareConnect.LocationsApi();
    // api.listLocations().then(
    //   (locations) => {
    //     console.log("Locations :");
    //     console.log(JSON.stringify(locations));
    //   },
    //   (err) => {
    //     console.error(`Error! ${err.status}, ${err.response.text}`);
    //   }
    // );
    var SquareConnect = require('square-connect')
    var defaultClient = SquareConnect.ApiClient.instance

    defaultClient.basePath = 'https://connect.squareupsandbox.com';
    var oauth2 = defaultClient.authentications['oauth2']
    oauth2.accessToken =  "EAAAELQJmX8m2hz9dOne12YEI_G5AkM0QecaMc-2SN3LicVwshaEYvoL8-MQwR6z"

    var api = new SquareConnect.LocationsApi()

    api.listLocations().then(function(data) {
        // console.log('sucess', JSON.stringify(data, 0, 1))
        console.log('sucess', JSON.stringify(data))
    }, function(error) {
        console.log(error)
    })
  },
  // axios.get(api.listLocations())
  // .then(function (data) {
  //     console.log('sucess', JSON.stringify(data, 0, 1))
  // }, function (error) {
  //     console.log(error)
  // })
};
</script>