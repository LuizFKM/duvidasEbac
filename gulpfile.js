const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./source/images/*')// pega as imagens da pasta images
    .pipe(imagemin()) // executa
    .pipe(gulp.dest('./build/images'))//envia para pasta destino imagens comprimidas
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')//pega os arquivos fonte
    .pipe(uglify()) //executa o plugin do gulp
    .pipe(obfuscate()) //executa o plugin para "obfuscar" o código
    .pipe(gulp.dest('./build/scripts'))// envia para pasta destino as compressões
}

function compilaSass(){
    return gulp.src('./source/styles/main.scss') //pega os arquivos fonte
        .pipe(sourcemaps.init()) // iniciando o sourcemaps, mapeia os arquivos fonte
        .pipe(sass({
            outputStyle: 'compressed'
        })) // execute as funções do sass
        .pipe(sourcemaps.write('./maps')) /*cria o arquivo de mapeamento e passamos a pasta onde os arquivos estarão disponíveis
        ele já considera o caminho onde estão os arquivos css, não precisa especificar ./build/styles/maps */
        .pipe(gulp.dest('./build/styles')) // envia para pasta destino as compilações
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
}






