const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function compilaSass(){
    return gulp.src('./source/styles/*.scss') //pega os arquivos fonte
        .pipe(sass()) // execute as funções do sass
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







