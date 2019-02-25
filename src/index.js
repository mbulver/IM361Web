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
    reminjis: ["Bunnles", "Zorb", "Storby", "Cubeilee", "Hextopus"],
    selectedreminji: null,
    colors: ["Red", "Green","Yellow"," Blue"],
    selectedcolor: null,
    types: ["Academic", "Extra Cirricular", "Work","Social"]
    }
  }
);

window.app = app;
