<template>
  <div class="card">
    <div class="card-content">
      {{ task.name }}
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        {{ task.work }}
      </div>
      <div class="card-footer-item">{{ task.days }} /day</div>
    </footer>
    <footer class="card-footer">
      <a class="card-footer-item" @click="decStatus(task)">back</a>
      <a class="card-footer-item" @click="incStatus(task)">prev</a>
      <!-- <button type="button" @click="notComp">NotComp</button>
      <button type="button" @click="progress">prog</button>
      <button type="button" @click="done">done</button> -->
    </footer>
  </div>
</template>
<script>
// import { mapMutations } from 'vuex'
export default {
  props: {
    task: {
      name: "",
      status: null,
      work: "",
      days: null,
    }
    // this.$store.state.task
  },
  data () {
    return {
      // tasks: [
      //   { name: "task 1", status: 1, icon: "😃", days: 3 },
      //   { name: "task 2", status: 1, icon: "🤗", days: 2 },
      //   { name: "task 3", status: 2, icon: "😂", days: 1 },
      //   { name: "task 4", status: 3, icon: "😇", days: 1 },
      // ],
    }
  },
  computed: {
    // tasks: function () {
    //   return this.$state.store.taskinfo.task
    // }
  },
  // computed: {
  //   taskinfo () {
  //     return this.$store.state.taskinfo.tasks
  //   }
  // },

  methods: {
    // addTask () {
    //   this.$store.commit('tasks/addTask')
    //   },
    //   ...mapMutations({
    //     incStatus: 'tasks/incStatus',
    //     decStatus: 'tasks/decStatus'
    //   }),

      // incStatus: function () {
      //   this.$store.commit('taskinfo/incStatus')
      // },
      incStatus: function (task) {
      if (1 <= task.status && task.status <= 2) {
        task.status++;
      }
      },
      decStatus: function (task) {
      if (2 <= task.status && task.status <= 3) {
        task.status--;
      }
      },
    //   addTask: function addTask() {
    //   this.tasks.push({
    //     name: this.newTaskName,
    //     status: 1,
    //     icon: this.newWork,
    //     days: this.newDays,
    //   });
    // },
    }
    // ...mapMutations([]),
    // ...mapActions('taskinfo', [
    //   'notComp',
    //   'progress',
    //   'done',
    // ]),
    // ...mapMutations([]),
    // ...mapActions('taskinfo', [
    //   'incStatus',
    //   'decStatus',
      
    // ]),
    
    
  }

</script>
<style scoped>
.card {
  flex: auto;
  margin-bottom: 5px;
  height: 50%;
  width: 50%;
  max-width: 50%;
  background-color: cornsilk;
  /* min-width: 100%; */
  border: 1px solid;
  margin: 2px;
}
.card-footer-item {
  width: 50%;
  padding-top: 0px;
  padding-bottom: 0px;
  border: 1px solid;
  margin: 2px;
}
</style>