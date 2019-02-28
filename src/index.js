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
    schedulename: "schedule",
    schedules: [],
    currentobject:[]
  },
  computed:{
    reminjiview: function ()
    {
      return "Reminjis_" + this.selectedreminji + this.selectedcolor + ".png";
    }
  },
  methods:{
    createschedule:function (reminjiview, schedulename)
    {
      this.schedules.push({
        remnji: reminjiview,
        name: schedulename,
        todos:[]
      });
    },
    addTodo:function(){
      schedule.todos.push(todo);

},
  takeawayTodo:function(){
            var index = schedule.todos.indexOf(todo);
        if (index >= 0) {
          schedule.todos.splice(index, 1);
        }
      }
    }
});
window.app = app;
