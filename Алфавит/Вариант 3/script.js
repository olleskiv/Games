function change_language(input_language) {
    language = input_language;
    set_language();
}
var click=1;
function start_stop(){

    if(click){
        time=setInterval(move, $("#slider").slider("value"));
        click=0;
    } else {
        clearInterval(time);
        click=1;
    }
}
function set_language(){
    if(language == 'ukr'){
        document.getElementById('div1').innerHTML = 'Оберіть інтервал (мс, 500-3500):';
        document.getElementById('ukr').style.textDecoration = 'underline';
        document.getElementById('rus').style.textDecoration = 'none';
    } else {
        document.getElementById('div1').innerHTML = 'Выберите интервал (мс, 500-3500):';
        document.getElementById('rus').style.textDecoration = 'underline';
        document.getElementById('ukr').style.textDecoration = 'none';
    }
}
var min1 = 0;
var max1 = 32;
var max2 = 2;
var all_letters_rus = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
var all_letters_ukr = ['А','Б','В','Г','Ґ','Д','Е','Є','Ж','З','И','І','Ї','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ю','Я'];
var main_latters = ['П','О','Л'];
function move(){
    main = document.getElementById('main');
    main.style.left = String(Math.floor(Math.random() * (1100 - 40 + 1)) + 40) + "px";
    main.style.top = String(Math.floor(Math.random() * (250 - 50 + 1)) + 50) + "px";
    document.getElementById('bottom').innerHTML = main_latters[Math.floor(Math.random() * (max2 - min1 + 1)) + min1];
    if(language == 'ukr'){
        document.getElementById('top').innerHTML = all_letters_ukr[Math.floor(Math.random() * (max1 - min1 + 1)) + min1];
    } else {
        document.getElementById('top').innerHTML = all_letters_rus[Math.floor(Math.random() * (max1 - min1 + 1)) + min1];
    }
}
window.onload = function(){
var language = 'ukr';
set_language();
$(function() {
    $( "#slider" ).slider({
        min: 500,
        max: 3500,
        slide: function(event, ui){
            var interval = $("#slider").slider("value");
            $("#interval").html(interval);
        }
    });
    });
}