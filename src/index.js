import "./style.css";
import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Welcome to Planmo',
    tasks: 0,
    completed_tasks: 0,
    reminjis_used: 0,
    user: 'Welcome, User'

  }
});

window.app = app;
