import "./style.css";
import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Welcome to Planmo',
    tasks: 0,
    completed_tasks: 0,
    reminjis_used: 0,
    user: 'Welcome, User',
    pageName: "Home",
    pageName:"About",
    pageName:"Contact",
    pageName: "ScheduleCreation",
    pageName: "LogIn",
    pageName: "SignUp",
    pageName: "Schedules",
    reminjis: ["Bunnles", "Zorb", "Storby", "Cubilee", "Hexapus"],
    selectedreminji: "Bunnles",
    colors: ["Red", "Green","Yellow","Blue"],
    selectedcolor: "Red",
    types: ["Academic", "Extra Cirricular", "Work","Social"],
    selectedtype: "Academic",
    schedules: [],
    currentName: "",
    currentobject:[]
  },
  computed:{
    reminjiview: function ()
    {
      return "Reminjis_" + this.selectedreminji + this.selectedcolor + ".png";
    }
  },
  methods:{
  createSchedule: function(reminjiview, currentName, selectedcolor,) {
    this.schedules.push({
      reminji: reminjiview,
      name: currentName,
      color: selectedcolor,
      todos: []
    });
  },
  addTodo: function(schedule, todo) {
    schedule.todos.push(todo);
  },
  removeTodo: function(schedule, todo) {
    var index = schedule.todos.indexOf(todo);

    if (index >= 0) {
      schedule.todos.splice(index, 1);
      }
    }
  }
});
window.app = app;
