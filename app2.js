new Vue({
  el: '#vue-app',

  data:{
    link:'index.html',
    available: false,
    nearby: false
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
