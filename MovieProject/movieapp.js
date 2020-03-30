Vue.component('movie-detail',{

    props: ['movie'],
    template: '<div><div class="card" style="width: 18rem;">\n' +
        '  <img class="card-img-top" v-bind:src="movie.Poster" alt="">\n' +
        '  <div class="card-body">\n' +
        '    <h5 class="card-title">{{movie.Title}}</h5>\n' +
        '    <p class="card-text"></p>\n' +
        '    <a href="#" class="btn btn-primary">Details</a>\n' +
        '  </div>\n' +
        '</div></div>'

});

new Vue({
    el: "#movieapp",
    data: {
      searchKey: '',
      movieList: []
    },

    methods: {

        searchMovies()
        {
            var url = 'http://www.omdbapi.com/?s=' + this.searchKey + '&apikey=932401f8';
            fetch(url)
                .then(response=>response.json())
                .then(data=>{
                    this.movieList=data;
                })
        }
    }

});
