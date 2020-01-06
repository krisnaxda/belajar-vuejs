new Vue({
  el: '#vue-app',

  data:{
    link:'index.html',
    website: '<a href="punchgame.html">Simple Punchbag Game</a>',
    available: false,
    nearby: false,
    success: false,
    error: false,
    characters:[
      'Mario',
      'Luigi',
      'Yoshi',
      'Bowser'
    ],
    ninjas: [
      { name: 'Ryu', age:25},
      { name: 'Yoshi', age:35},
      { name: 'Ken', age:55}
    ]
  },
  methods:{

  },
  computed:{

    compClasses: function(){
      return{
        available: this.available,
        nearby: this.nearby
      }
    }

  }


});
