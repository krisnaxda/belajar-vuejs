Vue.component('salam',{
  template: '<p>Halo ini komponen, nama saya : {{name}} | <button v-on:click="ubahNama">Ubah</button></p>',
  data: function(){
    return{
      name: 'Krisna'
    }
  },
  methods:{
    ubahNama : function(){
      this.name = 'Amarta'
    }
  }
});

var one = new Vue({
  el: "#app-one",

  data:{
    kembali: 'http://127.0.0.1:9000/punchgame.html',
    judul: 'Multiple Vue Instances',
    title: 'Halo ini adalah instances pertama..',
    lanjut: 'http://127.0.0.1:9000/lanjutan3.html'

  },
  methods:{

  },
  computed:{
    greet:function(){
      return "Hello saya app one :)";
    }

  }

});
var two = new Vue({
  el: "#app-two",

  data:{
    title: 'Halo ini adalah instances kedua..'
  },
  methods:{
    ubah:function(){
      one.title = "Ubah Title";
    }

  },
  computed:{
    greet:function(){
      return "Halo, saya dari app two :)";
    }

  }

});

var three = new Vue({
  el: "#app-three"
});

var four = new Vue({
  el: "#app-four"
});
