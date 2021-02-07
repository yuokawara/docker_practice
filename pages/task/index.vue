<template>
  <section class="section">
    <div class="container">
      <input type="text" v-model="newTaskName" />
      <select v-model="newWork">
        <option value="normal">normal</option>
        <option value="caution">caution</option>
        <option value="danger">danger</option>
      </select>
      <input type="number" v-model="newDays" />
      <button @click="addTask">add Task</button>
      <div class="column">
        <div class="column status-1">
          <div class="tags">
            <span class="tag">Not compatible</span>
            <span class="tag">{{ tasks.length }}</span>
          </div>
            <task
            v-bind:task="task"
            v-for="task in taskOpen"
            v-bind:key="task.name"
          />
        </div>
        <div class="column status-2">
          <div class="tags">
            <span class="tag">progress</span>
            <span class="tag"></span>
          </div>
            <!-- <task
            v-bind:task="$store.state.task"
            v-for="task in taskDoing"
            v-bind:key="task.name"
          /> -->
          <task
            v-bind:task="task"
            v-for="task in taskDoing"
            v-bind:key="task.name"
          />
        </div>
        <div class="column status-3">
          <div class="tags has-addons">
            <span class="tag">done</span>
            <span class="tag is-dark"></span>
          </div>
            <task
            v-bind:task="task"
            v-for="task in taskClosed"
            v-bind:key="task.name"
          />
        </div>
        <!-- <div>
          <button @click="counter">test</button>
          <p>{{ $store.state.modules.taskinfo.count }}</p>
        </div> -->
        <div class="counttest">
          <button @click="$store.commit('doit')">test</button>
          <button @click="$store.commit('reset')">reset</button>
          <a>
            click: {{ $store.state.counter}}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Task from "@/components/atoms/Task.vue";
// import { mapMutations, } from 'vuex'

export default {
  components: {
    Task,
  },
  props: {
    task: {
      name: "",
      status: null,
      icon: "",
      days: null,
    }
  },
  data() {
    return {
      tasks: [
        { name: "task 1", status: 1, work: "normal", days: 3 },
        { name: "task 2", status: 1, work: "caution", days: 2 },
        { name: "task 3", status: 2, work: "caution", days: 1 },
        { name: "task 4", status: 3, work: "danger", days: 1 },
      ],
      
      newTaskName: "",
      newWork: null,
      newDays: 0,
    };
  },
  computed: {
    taskOpen: function () {
      return this.open(this.tasks);
    },
    taskDoing: function () {
      return this.doing(this.tasks);
    },
    taskClosed: function () {
      return this.closed(this.tasks);
    },
    // taskinfo () {
    //   return this.$store.state.taskinfo.tasks
    // }
  },

  methods: {
    addTask() {
      // this.$store.commit('taskinfo/addTask')
      this.tasks.push({
        name: this.newTaskName,
        status: 1,
        icon: this.newWork,
        days: this.newDays,
      });
    },
    // doAct() {
    //   this.$store.state.counter++
    // },
    // counter () {
    //   this.$store.commit('taskinfo/inc')
    // },


    open(tasks) {
      return tasks.filter(function (task) {
        return task.status === 1;
      });
    },
    doing(tasks) {
      return tasks.filter(function (task) {
        return task.status === 2;
      });
    },
    closed(tasks) {
      return tasks.filter(function (task) {
        return task.status === 3;
      });
    },
  },
};
</script>
<style scoped>
.container {
  
  height: 100%;
  width: 100%;
  background-color: chartreuse;
}

.column {
  display: flex;
  flex-direction: row;
  background-color: darkturquoise;
  height: 300px;
  width: 80%;
  /* min-width: 100%;
    min-height: 100%; */
}

.status-1 {
  flex: auto;
  background-color: #ed8077;
  height: 100%;
  border: 1px solid;
  margin: 2px;
  padding: 2px;
}
.status-2 {
  flex: auto;
  background-color: #4488c5;
  height: 100%;
  border: 1px solid;
  margin: 2px;
}
.status-3 {
  flex: auto;
  background-color: #5eb5a6;
  height: 100%;
  border: 1px solid;
  margin: 2px;
}
.counttest {
  flex: auto;
  height: 100%;
  border: 1px solid;
  margin: 2px;
}

</style>