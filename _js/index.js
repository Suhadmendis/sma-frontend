var app = new Vue({
    el: '#app',
    data: {
      message: 'Powered by Vue'
    },
    mounted: function () {
        this.initial();
    },
    methods: {

        initial: function () {

          axios.get("https://sma-backend.onesandzeros.lk/playground/user/").then((response) => {
              console.log('====================================');
              console.log(response);
              console.log('====================================');
          });
        },

      },
    });
    



