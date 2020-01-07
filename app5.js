new Vue({
  el: '#app',
  data:{
    balik: 'http://127.0.0.1:9000/lanjutan2.html',
    lanjut: 'http://127.0.0.1:9000/lanjutan4.html',
    output: 'Biru'
  },
  methods:{
    bacaRefs:function(){
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.isian.value;
    }

  },
  computed:{

  }
})
