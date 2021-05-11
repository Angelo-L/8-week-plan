var chunkHold = [];
var chunkMin = 1;
var chunkMax = 6;
var allChunks = 0;
var allChunksArray = [];
var chunkStorage1 = [];
var chunkStorage2 = [];
var chunkStorageNumber = 20;
var chunkPositions = [];

console.log("Loading Started");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function randomCoords() {
	getRandomInt(0, 11);
}

function makeBlocksWithCoords(size) {
	var x = 0;
  var z = 0;
  var block = [];
  var blockNum = 0;

	for (i = 0; i <= size; i++) {
  	z = i
    for (o = 0; o <= size; o++) {
    	//console.log(o - size);
    	x = o
      block[o + blockNum] = [x, z]
    }
    blockNum = blockNum + size + 1
  }

  return[
  	block
  ];
}

console.log(makeBlocksWithCoords(40));

function addToTable(){
	var table = document.getElementById("table");
	var newIndex = 2;
  var newRow;
  var newCell;
  var newRsowindex = 0;
  var chunkNameNum;
  var newXCoords = -1;
  var newYCoords = 0;
  var newZCoords = -1;
  
  
	for (var i = 0; i <= newIndex; ++i) {
  	newRow = table.insertRow(i + 1);
    
    
    for (var o = 0; o <= 3; ++o) {
    	newCell = newRow.insertCell(o);
      
      chunkNameNum = i + 1
      
      
      if (o == 0) {
      	newCell.innerHTML = "Block" + chunkNameNum;
      }
      
      if (o == 1) {
      	newXCoords = newXCoords + 1
        console.log(newXCoords);
      	newCell.innerHTML = "" + newXCoords;
      }
      
      if (o == 2) {
      	newYCoords = newYCoords
        console.log(newYCoords + "sdfsafd");
      	newCell.innerHTML = "" + newYCoords;
      }
      
      if (o == 3) {
      	newZCoords = newZCoords + 1
        console.log(newZCoords);
      	newCell.innerHTML = "" + newZCoords;
      }
      
    }
  }
}

addToTable();

function addToChunkHold(num){
  var accounts = [];

  for (var i = 0; i <= num; ++i) {
      accounts[i] = 1;
  }

  chunkHold = chunkHold + accounts;
}

addToChunkHold(chunkStorageNumber);
console.log(chunkHold);

function splitIntoChunk(arr, num, chunkNum) {
    for (i = 0; i < arr.length; i += num) {
				let newChunkNum;
        let tempArray;

        var ewNum = chunkNum - 1;
        newChunkNum = ewNum * 5;
        console.log(chunkNum);
        console.log(ewNum);
        console.log(newChunkNum);
        console.log(i);
        console.log(num);
        tempArray = arr.slice(i + newChunkNum, i + num);
        console.log(tempArray);
        chunkStorage2 = chunkStorage2 + (tempArray);
        console.log(chunkStorage2);
        return tempArray;
       
    }
}



function ChunkHoldRandomizer (chunk, min, max){
	for (o = 0; o < chunk.length; o++){
  	chunkHold[o] = getRandomInt(min, max);
  }
}

function twoPassTextToConcat (text1, text2) {
	let textToConcat = [text1, text2].join();
  return textToConcat
}


ChunkHoldRandomizer(chunkHold, 1, 5);


function createFiveTallChunk (){
	for (i = 0; i  < chunkStorageNumber; i++){
  	var para = document.createElement("p");
    var num = i + 1;
    //console.log(i);
    var numString = num.toString();
    var trueString = "newChunk";
    var fullString = trueString + numString;
    console.log(fullString);
		para.innerText = "ErrorLoadingChunk";
    para.innerText = getRandomInt(chunkMin,chunkMax);
    para.setAttribute("id", fullString);
		document.body.appendChild(para);
    //document.getElementById("newChunk1").innerHTML = "0";
    allChunks++;
    allChunksArray[i] = fullString;
  
	
}
console.log(allChunksArray);
}

createFiveTallChunk();

console.log(allChunksArray);


if (allChunksArray.length > 0) {

	for (i = 0; i < allChunksArray.length; i++){
  	
  }
	
	console.log("chunkSplit1");
	let firstChunk = splitIntoChunk(allChunksArray, 5, 1);
  console.log(chunkStorage1);
  console.log("chunkSplit2");
  let secondChunk = splitIntoChunk(allChunksArray, 10, 2);
  console.log(chunkStorage2);
}
