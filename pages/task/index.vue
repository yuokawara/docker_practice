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
          <a> click: {{ $store.state.counter }} </a>
        </div>
      </div>
      <!-- <div class="clock">
        <span class="clock__hour"></span>
        <span class="clock__min"></span>
        <span class="clock__sec"></span>
        <span class="clock__12">12</span>
        <span class="clock__3">3</span>
        <span class="clock__6">6</span>
        <span class="clock__9">9</span>
      </div> -->
      <div class="analog">
        <div class="analogdial">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="hour meter"></div>
        <div class="min meter"></div>
        <div class="sec meter"></div>
      </div>
    </div>
    <!-- <div id="degital">
      <p class="date">{{ date }}</p>
      <p class="time">{{ time }}</p> 
      <p class="text">Degital</p>
    </div> -->
  </section>
</template>
<script>
import Task from "@/components/atoms/Task.vue";
// import { mapMutations, } from 'vuex'

export default {
  components: {
    Task
  },
  props: {
    task: {
      name: "",
      status: null,
      icon: "",
      days: null
    }
  },
  data() {
    return {
      tasks: [
        { name: "task 1", status: 1, work: "normal", days: 3 },
        { name: "task 2", status: 1, work: "caution", days: 2 },
        { name: "task 3", status: 2, work: "caution", days: 1 },
        { name: "task 4", status: 3, work: "danger", days: 1 }
      ],

      newTaskName: "",
      newWork: null,
      newDays: 0,
      time: "",
      date: ""
    };
  },

  mounted() {
    // setInterval(() => {
    //   const now = new Date();
    //   const h = now.getHours();
    //   const m = now.getMinutes();
    //   const s = now.getSeconds();

    //   const degH = h * (360 / 12) + m * (360 / 12 / 60);
    //   const degM = m * (360 / 60);
    //   const degS = s * (360 / 60);

    //   const elementH = document.querySelector(".clock__hour");
    //   const elementM = document.querySelector(".clock__min");
    //   const elementS = document.querySelector(".clock__sec");

    //   elementH.style.transform = `rotate(${degH}deg)`;
    //   elementM.style.transform = `rotate(${degM}deg)`;
    //   elementS.style.transform = `rotate(${degS}deg)`;
    // }, 10);

    const hour = document.querySelector(".hour.meter");
    const min = document.querySelector(".min.meter");
    const sec = document.querySelector(".sec.meter");

    setInterval(() => {
      const date = new Date();
      const s = (360 / 60) * date.getSeconds();
      const m = (360 / 60) * date.getMinutes() + s / 60;
      const h = (360 / 24) * date.getHours() + m / 24;

      sec.style.transform = `rotate(${s}deg)`;
      min.style.transform = `rotate(${m}deg)`;
      hour.style.transform = `rotate(${h}deg)`;
    }, 1000);

    // var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    // var timerID = setInterval(updateTime, 1000);
    // updateTime();
    // function updateTime() {
    //   var cd = new Date();

    //   var time = zeroPadding(cd.getHours(), 2) + ':' +
    //   zeroPadding(cd.getMinutes(), 2) + ':' +
    //   zeroPadding(cd.getSeconds(), 2);

    //   var date = zeroPadding(cd.getFullYear(), 4) + '-' +
    //   zeroPadding(cd.getDate(), 2) + '-' +
    //   week[cd.getDay()];
    // }
    // function zeroPadding(num, digit) {
    //   var zero = '';
    //   for(var i = 0; i < digit; i++) {
    //     zero += '0';
    //   }
    //   return (zero + num).slice(-digit);
    // }
  },

  computed: {
    taskOpen: function() {
      return this.open(this.tasks);
    },
    taskDoing: function() {
      return this.doing(this.tasks);
    },
    taskClosed: function() {
      return this.closed(this.tasks);
    }
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
        days: this.newDays
      });
    },
    // doAct() {
    //   this.$store.state.counter++
    // },
    // counter () {
    //   this.$store.commit('taskinfo/inc')
    // },

    open(tasks) {
      return tasks.filter(function(task) {
        return task.status === 1;
      });
    },
    doing(tasks) {
      return tasks.filter(function(task) {
        return task.status === 2;
      });
    },
    closed(tasks) {
      return tasks.filter(function(task) {
        return task.status === 3;
      });
    }
  }
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

/* .clock {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #333;
  border-radius: 50%;
}

.clock__hour {
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 5px);
  width: 10px;
  height: 150px;
  background: #333;
  transform-origin: bottom;
}

.clock__min {
  position: absolute;
  top: calc(50% - 180px);
  left: calc(50% - 2px);
  width: 4px;
  height: 180px;
  background: #eee;
  transform-origin: bottom;
}

.clock__sec {
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50% - 1px);
  width: 5px;
  height: 200px;
  background: #ff0000;
  transform-origin: bottom;
}

.clock__12 {
  position: absolute;
  top: 10px;
  left: calc(50%);
  transform: translateX(-50%);
  font-size: 18px;
}

.clock__3 {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 18px;
}

.clock__6 {
  position: absolute;
  bottom: 10px;
  left: calc(50%);
  transform: translateX(-50%);
  font-size: 18px;
}

.clock__9 {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 18px;
} */

.analog {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #333;
  border-radius: 50%;
}

.analog::after {
  content: "";
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: royalblue;
}

.analogdial {
  position: relative;
  width: 100%;
  height: 100%;
  /* background: seagreen; */
}

.analogdial > div {
  /* background-color: tomato; */
  position: absolute;
  top: 0;
  left: calc(50% - 3px);
  width: 5px;
  height: 50%;
  transform-origin: bottom;
}
.analogdial > div::after {
  position: absolute;
  top: 0;
  content: "";
  width: 5px;
  height: 15px;
  background-color: tomato;
}
.analogdial div:nth-child(1) {
  transform: rotate(30deg);
}
.analogdial div:nth-child(2) {
  transform: rotate(60deg);
}
.analogdial div:nth-child(3) {
  transform: rotate(90deg);
}
.analogdial div:nth-child(4) {
  transform: rotate(120deg);
}
.analogdial div:nth-child(5) {
  transform: rotate(150deg);
}
.analogdial div:nth-child(6) {
  transform: rotate(180deg);
}
.analogdial div:nth-child(7) {
  transform: rotate(210deg);
}
.analogdial div:nth-child(8) {
  transform: rotate(240deg);
}
.analogdial div:nth-child(9) {
  transform: rotate(270deg);
}
.analogdial div:nth-child(10) {
  transform: rotate(300deg);
}
.analogdial div:nth-child(11) {
  transform: rotate(330deg);
}
.analogdial div:nth-child(12) {
  transform: rotate(360deg);
}

.meter {
  background-color: plum;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform-origin: 50% 100%;
}
.hour.meter {
  width: 5px;
  height: 150px;
}
.min.meter {
  width: 3px;
  height: 180px;
}
.sec.meter {
  width: 2px;
  height: 170px;
}
/* .p {
  margin: 0;
  padding: 0;
} */

/* #degital {
  width: 400px;
  height: 400px;
  background-color: silver;
  font-family: "Share Tech Mono", monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
} */

/* .time {
  letter-spacing: 0.05em;
  font-size: 80px;
  padding: 5px 0;
} */

/* .date {
  letter-spacing: 0.1rem;
  font-size: 24px;
} */
</style>
