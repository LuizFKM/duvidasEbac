const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')

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

function funcaoPadrao (callback) {
    setTimeout(function(){
        console.log('Executando via Gulp');
        callback() // as funções do gulp trabalham com call back

    }, 2000);
}

function dizOi(callback) {
    setTimeout(function(){
        console.log('olá gulp');
        dizTchau(); // acessando a tarefa privada por meio da tarefa dizOi
        callback();
        
    }, 1000)
}

function dizTchau() { // função privada. Usamos essa sem callback e podemos usar ela em outras funções
    console.log('Tchau Gulp');
}


exports.default = gulp.parallel(funcaoPadrao, dizOi); // exportando a função por meio do método default(padrão) npm run gulp
exports.dizOi = dizOi; // exporta a função diz oi apenas se chamar npm run gul nome_da_função(dizOi)
exports.sass = compilaSass;
exports.watch = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))
}






