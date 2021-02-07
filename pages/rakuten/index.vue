<template>
  <div>
    <ul class="resultItems">
      <li class="resultItem" v-for="item in results" :key="item.id">
        <img :src="item.Item.mediumImageUrls[0].imageUrl" class="img" />
        <dl class="dataStyle">
          <dt>
            <a :href="item.Item.itemUrl">
              Name: {{ item.Item.itemName.slice(0, 20) + "..." }}
            </a>
          </dt>
          <dd class="price">¥{{ item.Item.itemPrice }}</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // posts: [],
      // info: null,
    };
  },
  async asyncData({ app }) {
    const baseUrl =
      "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?";
    const appId = "applicationId=1076502204487328374";
    const keyword = "&keyword=ワイン";
    // const review = "&reviewAverage";
    // const sort = "&sort=%2BitemPrice";
    const getUrl = encodeURI(baseUrl + appId + keyword);
    const response = await app.$axios.$get(getUrl);
    console.log("test", response.json);
    return {
      results: response.Items,
    };
  },
  // mounted() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => (this.posts = response.data));
  // },
};
</script>

<style scoped>
.resultItems {
  background-color: #efefef;
}
</style> 