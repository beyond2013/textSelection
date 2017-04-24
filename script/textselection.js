window.onload = function(){
  document.getElementById('addMarkup').addEventListener('click', addMarkup);
  document.getElementById('select').addEventListener('click', getSource);
  document.getElementById('getText').addEventListener('click', getText);
  document.getElementById('undoExtension').addEventListener('click', undoExtension);
  document.getElementById('removeSelection').addEventListener('click', removeSelection);
  document.getElementById('extendForward').addEventListener('click', extendForward);
  document.getElementById('extendBackward').addEventListener('click', extendBackward);
}
function addMarkup(){
  var selection = window.getSelection().toString();
  console.log(selection);
  var markup= "<mark>".concat(selection).concat("</mark>");
  var sent = document.getElementById('sentence').innerHTML;
  document.getElementById("sentence").innerHTML=sent.replace(selection, markup);

}
function getText(){
  var text = document.getElementById('sentence');
  console.log("text: " + text);
  source = document.getElementById('source');
  var selection = document.getSelection(),
      range  = document.createRange();
  var value = source.value,
      start = text.innerHTML.indexOf(value);
  console.log("start= " + start);
  selection.removeAllRanges();
  if(value.length === 0 || start.index === -1){
    return;
  }
  console.log("childNodes: " + text.childNodes.length);
 var str="source located at: ";
 if(text.hasChildNodes()){
   for(var i=0;i< text.childNodes.length;i++)
   {
     childNode = text.childNodes[i];
     if(childNode.nodeType == 3){
      if(childNode.nodeValue.indexOf(value) >=0){
         str += childNode.nodeValue; 
         start = childNode.nodeValue.indexOf(value);
         range.setStart(childNode,start);
         range.setEnd(childNode,(start + value.length));
         selection.addRange(range);
      }
     }
   }
 }

}
function getSource(){
  var textNode = document.getElementById('sentence').firstChild,
      source = document.getElementById('source');
  var selection = document.getSelection(),
      range  = document.createRange();
  var value = source.value,
      start = textNode.nodeValue.indexOf(value);
  selection.removeAllRanges();
  if(value.length === 0 || start.index === -1){
    return;
  }
  range.setStart(textNode,start);
  range.setEnd(textNode,(start + value.length));
  selection.addRange(range);


}

function removeSelection(){
  selection = window.getSelection();
  selection.removeAllRanges();
}

function extendForward(){
  var selection = window.getSelection();
  selection.modify('extend','right', 'word');
}
function undoExtension(){
  var selection = window.getSelection();
  selection.modify('extend', 'left', 'word');
}
function extendBackward(){
  var textNode = document.getElementById('sentence').firstChild,
      selection = window.getSelection(),
      range = document.createRange();
  console.log('selection.toString(): ' + selection.toString());
  console.log('selection.length: ' + selection.toString().length);
  if(selection.toString().length === 0){
    return;
  }
  var target = ' ' + previousWord() + ' ';
  indexPW = textNode.nodeValue.indexOf(target);
  console.log('indexPW: ' + indexPW);
  range.setStart(textNode,indexPW+1);
  range.setEnd(textNode,(index + selection.toString().length));
  selection.removeAllRanges();
  selection.addRange(range);
}


function previousWord(){
  var pw='',
      textNode = document.getElementById('sentence').firstChild,
      selection = window.getSelection();
  console.log('textNode: ' + textNode);
  console.log('selection: ' + selection);
  index = textNode.nodeValue.indexOf(selection);
  console.log('indexOf(selection): ' + index);
  var sentArray = textNode.nodeValue.split(' ');
  console.log('sentArray: ' + sentArray);
  var firstWord = selection.toString().split(' ')[0];
  console.log('firstWord: ' + firstWord);
  var firstWordIndex= sentArray.indexOf(firstWord);
  if(firstWordIndex >=1){
    console.log('Previous Word :' + sentArray[firstWordIndex-1]);
    pw = sentArray[firstWordIndex - 1];
  }
  else{
    pw = sentArray[0];
  }
  return pw;
} 
