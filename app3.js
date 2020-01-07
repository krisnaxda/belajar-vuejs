new Vue({
  el: '#app',

  data:{
    kembali: 'http://127.0.0.1:9000/lanjutan.html',
    health: 100,
    ended: false,
    next: 'http://127.0.0.1:9000/lanjutan2.html'
  },

  methods:{
    punch: function()
    {
      //menambah efek suara
      let suara = new Audio('assets/sound/punch.mp3');
      suara.play();

      //volume suara
      suara.volume = 0.5;

      //mengurangi health
      this.health -= 10;
      //menampilkan health di console js
      console.log(this.health);
      console.log(this.ended);
      // jika health=0 game ended
      if( this.health <= 0){
        this.ended = true;
      }

    },
    restart: function()
    {
      this.health = 100;
      this.ended = false;
      console.log(this.health);
      console.log(this.ended);
    }

  },

  computed:{

  }

})
