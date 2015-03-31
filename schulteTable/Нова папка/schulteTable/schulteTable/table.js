var tableString = 'nothingBeingGenerated';
var tableSize = 5;//default value of tableSize
//colors of table
var colours_codes = ['#FF0000','#2600FF','#95DEFF','#44FF7F','#007024','#EBFF00','#FFCD00','#5C2700','#FF5DD1','#80035D'];

//iput form for table size
$('#Table_size').bind("change keyup input click", function(){
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    //set the size of table
    tableSize = $('#Table_size').val();
});
//table generating and output
$('#gen_button').bind('click', function(){
	tableNumbers = shuffle(serialArray(tableSize));
	tableString = htmlTableGenerating(tableSize);
	$(".table").html(tableString);
});
//table painting
$("#paint").on( "click", function() {
            if($(this).is(":checked")) {
            RandomPainting();}//paint cells into different colors 
   else {RandomPainting(0);}//paint cells into white
})
//this function returns a sring which discribes html table(size*size)
function htmlTableGenerating(size){
	var string = '<table>';
	for (var i=0;i<size;i++){
		string +='<tr>';//open new line in table
		for (var j=0;j<size;j++){
			string +='<td id = "cell'+i+'_'+j+'">';//create new column with id = celli_j
			string += tableNumbers[i*size+j];
			
			string +='</td>';
		}
		string +='</tr>';//close new line in table
	}
	return string;
}
//this function returns array, which consists of serial of numbers from 1 to size*size;
function serialArray(size){
	var numbers = [];
	for(var i=0;i<tableSize*tableSize;i++){
		numbers[i] = i+1;
	}
	return numbers;
}
//this function returns a random value between inputed min and max
function random(min,max){
	var range = max-min;
	return Math.round(min+(Math.random()*range));
}
//this function shuffle inputed array and returns it
function shuffle(array){
	var shuffledArr = [];
	var temp = 0;
	for(i=0;i<array.length;i++){
		var randomIndex = random(i,array.length-1);
		temp = array[i];
		array[i]=array[randomIndex];
		array[randomIndex]=temp;

	}
	return array;
}
function paint(elementId,color){
	document.getElementById(elementId).style.background = color;
}
//this function paint cells. param=0 make whem white. 
function RandomPainting(param){ 
	var str = 0;
	var col = 0;
	var id = '';
	randInd = 0;
	for (var i=0; i<tableSize*tableSize; i++){
		str = Math.floor(i/tableSize);
		col = i - str*tableSize;
		id = 'cell'+str+'_'+col;//replicate id
		if (param ==0){
			paint(id,"white");}
		else{
			randInd = random(0,colours_codes.length-1); 
			randomColor = colours_codes[randInd];
			paint(id,randomColor);
		}
	}
}