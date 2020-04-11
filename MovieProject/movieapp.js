Vue.component('movie-detail',{

    props: ['movie'],



    methods:{
        addFavorite(){
            this.favorites.add(this.book);
        },
    },
    template: '<div><div class="card" style="width: 18rem;">\n' +
        '  <img class=".card-columns" v-bind:src="movie.Poster" alt="">\n' +
        '  <div class="card-body">\n' +
        '    <h5 class="card-title">{{movie.Title}}</h5>\n' +
        '    <p class="card-text"></p>\n' +
        '    <a href="#" class="btn btn-primary">Details</a><div class="favoriting">\n' +
        '    <label\n' +
        '    class="favorite__heart"\n' +
        '    v-bind:class="{\'favorite__heart__selected\': value, \'is-disabled\': disabled}"\n' +
        '    v-on:click="addFavorite">\n' +
        '    <input\n' +
        '    class="favorite__checkbox"\n' +
        '    type="checkbox"\n' +
        '    v-bind:name="name"\n' +
        '    v-bind:value="value"\n' +
        '    v-bind:required="required"\n' +
        '    v-bind:disabled="disabled"\n' +
        '    v-model="value">\n' +
        '                ❤\n' +
        '    </label>\n' +

        '    </div>\n' +

        '  </div>\n' +

        '</div></div>'


        });

new Vue({
    el: "#movieapp",
    data: {
      searchKey: '',
      movieList: [],
        favorites: [],

    },
    // methods
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
    },



    });

Vue.component('favorite', {
    template: '#template-favorite',
    data: function() {
        return { };
    },
    props: {
        'name': {
            type: String,
            default: 'favorite'
        },
        'value': {
            type: Boolean,
            default: false
        },
        'disabled': {
            type: Boolean,
            default: false
        }
    },
    methods: {
        favorite: function() {
            if (this.disabled==true) {
                return;
            }
            this.value = !this.value;
        }
    }
});

Vue.component('favorite', {
    template: '#template-favorite',
    data: function() {
        return { };
    },
    props: {
        'name': {
            type: String,
            default: 'favorite'
        },
        'value': {
            type: Boolean,
            default: false
        },
        'disabled': {
            type: Boolean,
            default: false
        }
    },
    methods: {
        favorite: function() {
            if (this.disabled==true) {
                return;
            }
            this.value = !this.value;
        }
    }
});


var app = new Vue({
    el: 'body'
});


var app = new Vue({
    el: 'body'
});
