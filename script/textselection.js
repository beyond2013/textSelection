getSelectionText = function(){
  sentence = document.getElementById("sentence");
  target= document.getElementById("target");
  selection = window.getSelection();
  range = document.createRange();
  index = sentence.innerHTML.indexOf(target.value);
  range.setStart(sentence.firstChild,index);
  range.setEnd(sentence.firstChild,(index + target.value.length));
  selection.removeAllRanges();
  selection.addRange(range);
}

removeSelection = function(){
  selection = window.getSelection();
  selection.removeAllRanges();
}

extendSelection = function(buttonId){
  var element = document.getElementById(buttonId);
  if(element.id == "Previous"){
    var selection = window.getSelection();
    selection.modify("extend", "left", "word");
  }
  else if(element.id == "Next"){
    var selection = window.getSelection();
    selection.modify("extend","right", "word");

  }
  else if(element.id == "Move"){
    var selection = window.getSelection();
    console.log("selection.toString(): " + selection.toString());
    console.log("selection.length: " + selection.toString().length);
  range = document.createRange();
  target = " " + previousWord() + " ";
  indexPW = sentence.innerHTML.indexOf(target);
  console.log("indexPW: " + indexPW);
  range.setStart(sentence.firstChild,indexPW+1);
  range.setEnd(sentence.firstChild,(index + selection.toString().length));
  selection.removeAllRanges();
  selection.addRange(range);
  }
}

tokenize = function(){
var divsentence = document.getElementById("sentence");
var sentence = divsentence.innerHTML;
console.log(sentence);
var words = sentence.split(" ");
console.log(words);

}

previousWord = function(){
  var pw="";
  var sentence = document.getElementById("sentence").innerHTML;
  var selection = window.getSelection();
  console.log("selection: " + selection);
  index = sentence.indexOf(selection);
  console.log("indexOf(selection): " + index);
  var sentArray = sentence.split(" ");
  console.log("sentArray: " + sentArray);
  var firstWord = selection.toString().split(" ")[0];
  console.log("firstWord: " + firstWord);
  var firstWordIndex= sentArray.indexOf(firstWord);
  if(firstWordIndex >=1){
    console.log("Previous Word :" + sentArray[firstWordIndex-1]);
    pw = sentArray[firstWordIndex - 1];
  }
 else{
   pw = sentArray[0];
 }
 return pw;
} 
