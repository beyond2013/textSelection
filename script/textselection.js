getSource = function(){
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

removeSelection = function(){
  selection = window.getSelection();
  selection.removeAllRanges();
}

extendSelectionForward = function(){
    var selection = window.getSelection();
    selection.modify('extend','right', 'word');
}
undoExtension = function(){
    var selection = window.getSelection();
    selection.modify('extend', 'left', 'word');
}
moveSelection = function(){
  var textNode = document.getElementById('sentence').firstChild,
      selection = window.getSelection(),
      textNode = document.getElementById('sentence').firstChild,
      range = document.createRange();
  console.log('selection.toString(): ' + selection.toString());
  console.log('selection.length: ' + selection.toString().length);
  var target = ' ' + previousWord() + ' ';
  indexPW = textNode.nodeValue.indexOf(target);
  console.log('indexPW: ' + indexPW);
  range.setStart(textNode,indexPW+1);
  range.setEnd(textNode,(index + selection.toString().length));
  selection.removeAllRanges();
  selection.addRange(range);
}


previousWord = function(){
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
