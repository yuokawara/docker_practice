<template>
  <div class="container">
    <h2>youtube</h2>
    <input v-model="findword" />
    <button @click="findMovie">SEARCH</button>
    <!-- <table v-show="results">
      <tr>
        <th></th>
        <th>MOVIE</th>
        <th>INFO</th>
      </tr>
      <tr v-for="(item, index) in results" v-bind:key="item.id.videoId">
        <td>
          {{ index + 1 }}
        </td>
        <td>
          <a :href="'https://www.youtube.com/watch?v=' + item.id.videoId">
            <img
              :src="item.snippet.thumbnails.medium.url"
              :alt="item.snippet.title"
            />
          </a>
        </td>
        <td>
          <b>{{ item.snippet.title }}</b>
            <span class="desc">
              {{ item.snippet.description }}
            </span>
        </td>
      </tr>
    </table> -->
    <table v-for="(i, index) in info" :key="index">
      <tr v-for="(item, index) in i.items" :key="index">
        <!-- <p>{{ item.snippet.statistics.viewCount }}</p> -->
        <!-- <td>
          <a :href="'https://www.youtube.com/watch?v=' + item.id.videoId">
            <img
              :src="item.snippet.thumbnails.medium.url"
              :alt="item.snippet.title"
            />
          </a>
        </td> -->
        <!-- <td>
          <h4>{{ item.snippet.title }}</h4>
          <a :href="'https://www.youtube.com/watch?v=' + item.id.videoId"
            >動画</a
          >
          <h3>{{ info.data.pageInfo.totalResults }}</h3>
        </td> -->

        <!-- 規約違反になるためこちらは導入は検討 -->
        <td>
          <youtube
            ref="youtube"
            :video-id="item.id.videoId"
          />
        </td>
        <!-- test -->
        <td>
           <chart
            :chartType="chartType"
            :chartData="chartData"
            :chartOptions="chartOptions"
          />
        </td>
      </tr>
    </table>
    <div>
      <button @click="page(info.data.prevPageToken)">prev</button>
      <button @click="page(info.data.nextPageToken)">Next</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Chart from '@/components/atoms/Chart.vue'
import Vue from "vue";
import VueYoutube from "vue-youtube";
Vue.use(VueYoutube);

export default {
  components: {
    Chart,
  },
  data() {
    return {
      info: null,
      // results: null,
      findword: '',
      // searchAPI
      api: "https://www.googleapis.com/youtube/v3/search",
      // 再生回数取得は自分の動画のみ
      viewSampleapi: 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id=F2EFqIrPe4w&fields=items%2Fstatistics&key=AIzaSyDY8dqUoVI9R3hsYzxrmuQ9PmCW1D6Y0XU',
      // 自身のチャンネル情報
      channelapi: 'https://www.googleapis.com/youtube/v3/channels?key=AIzaSyDY8dqUoVI9R3hsYzxrmuQ9PmCW1D6Y0XU&part=snippet,statistics&id=UCu25pBD426XppBMjj-RafcA',
      params: {
        type: "video",
        part: "snippet",
        // part: "snippet, statistics",
        maxResults: '3',
        q: "peter mckinnon",
        order: "viewCount",
        pageToken: "",
        key: "AIzaSyDY8dqUoVI9R3hsYzxrmuQ9PmCW1D6Y0XU", // APIKEY
      },
      chartType: 'PieChart',
      chartData: [
        ['年', '売上', '費用', '収益'],
        ['test1', 1000, 400, 200],
        ['test2', 1170, 460, 250],
        ['test3', 660, 1120, 300],
        ['test4', 1030, 540, 350]
      ],
      chartOptions: {
        title: '統計データテスト',
        subtitle: '視聴者数',
        width: 500,
        height: 500
      }
    };
  },
  created() {
    let params = this.params;
    axios.get(this.api, { params })
    // axios.get(this.viewSampleapi)
    // axios.get(this.channelapi)
    .then((response) => {
      this.info = response
      console.log("get youtube", response);
      console.log("search findword", params);
      console.log("get totalResult", response)
    })
    .catch(function(err) {
      console.log(err)
    })
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
  methods: {
    findMovie: function () {
      this.params.q = this.findword
      var self = this
      axios.get(this.api, { params: this.params })
      .then((response) => {
        this.info = response
      })
      .catch(function(err) {
      console.log(err)
    })
    },
    page: function (token) {
      this.params.pageToken = token;
      const params = this.params;
      axios.get(this.api, { params })
      .then((response) => {
        this.info = response;
        console.log("get info", response)
      })
      .catch(function(err) {
        console.log(err)
      })
      ;
    },
    // playVideo() {
    //   this.player.playVideo();
    // },
    // pauseVideo() {
    //   this.player.pauseVideo();
    // },
    // stopVideo() {
    //   this.player.stopVideo();
    // },
    ready() {
      console.log("ready");
    },
    ended() {
      console.log("ended");
    },
    playing() {
      console.log("playing");
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: auto;
}
</style>