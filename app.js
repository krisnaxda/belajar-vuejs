new Vue({
  el: '#vue-app',

  data:{
    name: 'Shaun',
    job: 'sheep',
    website : 'http://localhost.com',
    websiteTag : '<a href="127.0.0.1">webtag</a>',
    lanjutan : '<a href="lanjutan.html">Lanjutan</a>',
    age : 20,
    x : 0,
    y : 0,
    nama: '',
    umur: '',
    a: 0,
    b:0,
    hari: 20
  },
  methods:{
    greet:function(time)
    {
      return 'Good ' + time +" , " + this.name;
    },
    add:function(tambah)
    {
      this.age += tambah;
    },
    subtract:function(kurang)
    {
      this.age -= kurang;
    },
    updateXY: function(event)
    {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function()
    {
      alert('maaf web tidak bisa dikunjungi')
    },
    logName: function()
    {
      console.log('You entered name');
    },
    logAge: function()
    {
      console.log('you entered age');
    }

  },

  computed:
  {
    addToA:function ()
    {
      console.log('addToA');
      return this.a + this.hari;
    },
    addToB: function()
    {
      console.log('addToB');
      return this.b + this.hari;
    }
  }


});
