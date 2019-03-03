import "./style.css";
import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {
    // defines all the pieces of data used in the webapp
    pageName: "Home",
    reminjis: ["Bunnles", "Zorb", "Storby", "Cubilee", "Hexapus"],
    selectedreminji: "Bunnles",
    colors: ["Red", "Green","Yellow","Blue"],
    selectedcolor: "Red",
    types: ["Academic", "Extra Cirricular", "Work","Social"],
    selectedtype: "Academic",
    schedules: [],
    currentName: "",
    selectedschedule:"",
    currentTodo: ""
  },
  computed:{
    // defines the reminji view function which is used to view the current reminji during schedule creation
    reminjiview: function ()
    {
      return "Reminjis_" + this.selectedreminji + this.selectedcolor + ".png";
    },
    //functino that gets the number of schedules
    numberOfSchedules: function() {
      return this.schedules.length;
    },
    //function that gets if there are schedules
    hasSchedules: function() {
      return this.schedules.length > 0;
    }
  },
  methods:{
    //function that creates the schedule after collecting data
  createSchedule: function(reminjiview, currentName, selectedcolor,) {
    this.schedules.push({
      reminji: reminjiview,
      name: currentName,
      todos: []
    });
    this.pageName = 'Home';
  },
  //allows users to add to dos to their schedules
  addTodo: function(schedule, todo) {
    schedule.todos.push(todo);
  },
  //allows users to remove to dos to their schedules
  removeTodo: function(schedule, todo) {
    var index = schedule.todos.indexOf(todo);

    if (index >= 0) {
      schedule.todos.splice(index, 1);
      }
    }
  }
});
window.app = app;
