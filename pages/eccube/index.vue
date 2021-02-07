<template>
  <div>
    <h2>ECcube</h2>
    <div id="pie_chart"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // admin_url: "",
      // site_url: "",
      // client_id: "",
      // client_secret: "",
      // token: "",
      SpreadSheetUrl: ''
    };
  },

  mounted () {
    google.charts.load('current', {packeges:['corechart']});

    google.charts.setOnloadCallback(Spreadsheet);

    function Spreadsheet() {
      var query = new google.visualization.Query('SpreadSheetUrl');
      query.send(drawChart);
    }

    function drawChart(response) {

      const data = response.getDataTable();

      const options = {title: 'test',  /*'is3D': true*/};

      const chart = new google.visualization.PieChart(
        document.query('#pie_chart')
      );
      chart.draw(data, options);
    }
  },

  methods: {
    // getService: function getService() {
    //   return OAuth2.createService("eccube")
    //     .setAuthorizationBaseUrl(
    //       PropertiesService.getScriptProperties().getProperty("admin_url") +
    //         "authorize"
    //     )
    //     .setTokenUrl(
    //       PropertiesService.getScriptProperties().getProperty("site_url") +
    //         "token"
    //     )
    //     .setClientId(
    //       PropertiesService.getScriptProperties().getProperty("client_id")
    //     )
    //     .setClientSercret(
    //       PropertiesService.getScriptProperties().getProperty("client_sercret")
    //     )
    //     .setPropertyStore(PropertiesService.getUserProperties())
    //     .setScope("read")
    //     .setCallbackFunction("usercallback");
    // },

    // showSidebar: function showSidebar() {
    //   var service = getService();
    //   if (!service.hasAccess()) {
    //     var authorizationUrl = service.getAuthorizationUrl();
    //     var template = HtmlService.createTemplate(
    //       '<a href="<?= authorizationUrl ?>" target="_blank">Authorize</a>. ' +
    //         "Reopen the sidebar when the authorization is complete."
    //     );
    //     template.authorizationUrl = authorizationUrl;
    //     var page = template.evaluate();
    //     SpreadsheetApp.getui().showSidebar(page);
    //   } else {
    //     getProduct(service.getAccessToken());
    //   }
    // },

    // userCallback: function usercallback(request) {
    //   var service = getService();
    //   var isAuthorized = service.handleCallback(request);

    //   if (isAuthorized) {
    //     return HtmlService.createHtmlOutput("success");
    //   } else {
    //     return HtmlService.createHtmlOutput("fault");
    //   }
    // },

    // getProduct: function getProduct(token) {
    //   const apiUrl =
    //     PropertiesService.getScriptProperties().getProperty("site_url") + "api";
    //   const queryBody = `{
    //             product(id:2) {
    //                 id,
    //                 name
    //             }
    //         }`;

    //   const options = {
    //     method: "post",
    //     contentType: "application/json",
    //     headers: {
    //       Authorization: "Bearer " + token,
    //     },
    //     payload: JSON.stringify({ query: queryBody }),
    //   };

    //   var response = UrlFetchApp.fetch(apiUrl, options);
    //   var result = JSON.parse(response.getContentText());

    //   const productName = result.data.product.name;
    //   const sheet = SpreadsheetApp.getActiveSheet();
    //   sheet.getRange(1, 1).setValue(productName);
    // },
  },
};
</script>