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
    console.log(selection);
    console.log(selection.modify("move", "backward", "word"));
  }
}


