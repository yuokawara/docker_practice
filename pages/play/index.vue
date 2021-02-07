<template>
  <div class="container">
    <div>
      <h2>youtube</h2>
      <youtube
        ref="youtube"
        :video-id="videoId"
        @playing="playing"
        @paused="paused"
        @ended="ended"
      />
      <div>
        <button @click="playVideo">PLAY</button>
        <button @click="pauseVideo">POUSE</button>
        <button @click="stopVideo">STOP</button>
      </div>
    </div>
    <!-- <table>
        <youtube
        ref="youtube"
        :video-id="videoId"
        @playing="playing"
        @paused="paused"
        @ended="ended"
      />
    </table> -->
    <!-- <div>
            <button id="play" v-if="show == false" @click="play()">PLAY</button>
            <button id="stop" v-if="show == true" @click="stop()">stop</button>
        </div>
        <div>
            <button id="skip" @click="back()">BACK</button>
            <button id="skip" @click="skip()">BACK</button>
        </div>
        <div>
            <button id="seekbar" v-bind:style="{ 'background-size' :percent+ '%' }"></button>
        </div>
        <div>
            <a id="download" :href="src" download>download</a>
        </div> -->
  </div>
</template>
<script>
import Vue from "vue";
import VueYoutube from "vue-youtube";
Vue.use(VueYoutube);

export default {
  data() {
    return {
      videoId: "hXV4oLz0-Ek",
      data: [
          {'id': 1, 'name': 'test1', 'videoId': "hXV4oLz0-Ek"},
          {'id': 2, 'name': 'test2', 'videoId': "i81Lt_pm7C8"},
          {'id': 3, 'name': 'test3', 'videoId': "5sNnwjgYWLE"},
      ]
      // src: 'URL',
      // audio: new Audio(),
      // show: false,
      // duration: 0,
      // currentTime: 0,
      // percent: 0,
    };
  },
  // mounted: function() {
  //     this.audio.src = this.src;
  //     this.audio.load();
  //     this.audio.addEventListener('play', () => {
  //         this.duration = Math.floor(this.duration.audio);
  //     });
  //     this.audio.addEventListener('time', () => {
  //         this.currentTime = Math.floor(this.audio.currentTime);
  //         this.percent = Math.floor((this.currentTime / this.duration) * 1000)
  //     });
  // },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    pauseVideo() {
      this.player.pauseVideo();
    },
    stopVideo() {
      this.player.stopVideo();
    },
    ready() {
      console.log("ready");
    },
    ended() {
      console.log("ended");
    },
    playing() {
      console.log("playing");
    },
    // play: function () {
    //     this.audio.play();
    //     this.show = true;
    // },
    // stop: function () {
    //     this.audio.stop();
    //     this.show = false;
    // },
    // skip: function () {
    //     this.audio.currentTime += 10;
    // },
    // back: function () {
    //     this.audio.currentTime -= 10;
    // },
  },
};
</script>
<style scoped>
/* #seekbar {
  width: 100%;
  height: 10px;
  margin: 0.5em;
  border-radius: 5px;
  background: linear-gradient(#ccc, #ccc) no-repeat #eee;
} */
</style>