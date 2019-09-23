let mix = require('laravel-mix');


mix.js('src/js/main.js', 'dist/js')
    .copy('src/images/','dist/images')
    .sass('src/scss/main.scss', 'dist/scss');
