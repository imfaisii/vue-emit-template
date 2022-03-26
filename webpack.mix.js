const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .vue()
    .sass("resources/sass/app.scss", "public/css");

mix.styles(["resources/css/custom/*.css"], "public/css/styles.css");
mix.scripts(
    [
        "resources/js/scripts/counter.js",
        "resources/js/scripts/swiper-bundle.min.js",
        "resources/js/scripts/tobii.min.js",
        "resources/js/scripts/tobii.js",
        "resources/js/scripts/bootstrap.bundle.min.js",
        "resources/js/scripts/contact.js",
        "resources/js/scripts/app.js",
    ],
    "public/js/scripts.js"
);
