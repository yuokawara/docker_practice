<template>
  <div>
      <h2>qiita</h2>
      <div v-for="(data, index) in data" :key="index">
          <ul>
              <li>
                  <a :href="data.url">{{ data.title }}</a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
const baseUrl = 'https://qiita.com/api/v2/'

  export default {
    async asyncData () {
        try {
            const res = await axios.get(baseUrl + 'items', {
                params: {
                    page: 1,
                    per_page: 10,
                }
            });
            console.log('qiita info', res.data)
            return {
                data: res.data
            }          
        } catch (error) {
            console.log(error);
        }
    }
  }
</script>