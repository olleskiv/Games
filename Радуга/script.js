function change_language(input_language) {
    language = input_language;
    set_language();
}
var click=1;
function start_stop(){

    if(click){
        time=setInterval(move, $("#slider_interval").slider("value"));
        click=0;
    } else {
        clearInterval(time);
        click=1;
    }
}
function set_language(){
    if(language == 'ukr'){
        document.getElementById('div1').innerHTML = 'Оберіть інтервал (мс, 500-3500):';
        document.getElementById('div2').innerHTML = 'Оберіть кількість хлопків (0-20%):';
        document.getElementById('ukr').style.textDecoration = 'underline';
        document.getElementById('rus').style.textDecoration = 'none';
    } else {
        document.getElementById('div1').innerHTML = 'Выберите интервал (мс, 500-3500):';
        document.getElementById('div2').innerHTML = 'Выберите количество хлопков (0-20%):';
        document.getElementById('rus').style.textDecoration = 'underline';
        document.getElementById('ukr').style.textDecoration = 'none';
    }
}
var min = 0;
var max1 = 9;
var max2;
var colours_rus = ['красный','синий','голубой','салатовый','зеленый','желтый','оранжевый','коричневый','розовый','фиолетовый'];
var colours_ukr = ['червоний','синій','блакитний','салатовий','зелений','жовтий','помаранчевий','коричневий','рожевий','фіолетовий'];
var colours_codes = ['#ff5f3d','#2c6ed5','#4ec8f7','#00e721','#007024','#ffa037','#FFCD00','#875546','#FF5DD1','#bd59d4'];
function move(){
    var percentage_of_claps = $("#slider_claps").slider("value");
    var amount_of_claps = Math.round((10*percentage_of_claps)/(100-percentage_of_claps));
    max2 = max1 + amount_of_claps;
    for(var i = 0; i < amount_of_claps; i++){
        colours_rus.push('хлопок');
        colours_ukr.push('хлопок');
    }
    main = document.getElementById('main');
    main.style.left = String(Math.floor(Math.random() * (800 - 30 + 1)) + 30) + "px";
    main.style.top = String(Math.floor(Math.random() * (450 - 100 + 1)) + 100) + "px";
    document.getElementById('main').style.background = colours_codes[Math.floor(Math.random() * (max1 - min + 1))];
    if(language == 'ukr'){
        document.getElementById('main').innerHTML = colours_ukr[Math.floor(Math.random() * (max2 - min + 1))];
    } else {
        document.getElementById('main').innerHTML = colours_rus[Math.floor(Math.random() * (max2 - min + 1))];
    }
}
window.onload = function(){
var language = 'ukr';
set_language();
$(function() {
    $( "#slider_interval" ).slider({
        min: 500,
        max: 3500,
        slide: function(event, ui){
            var interval = $("#slider_interval").slider("value");
            $("#interval").html(interval);
        }
    });
    });
    $(function() {
        $( "#slider_claps" ).slider({
            min: 0,
            max: 20,
            slide: function(event, ui){
                var percentage_of_claps = $("#slider_claps").slider("value");
                $("#percentage_of_claps").html(percentage_of_claps);
            }
        });
    });
}