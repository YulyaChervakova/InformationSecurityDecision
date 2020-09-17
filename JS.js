function showHide(element_id) {
  //Если элемент с id-шником element_id существует
  if (document.getElementById(element_id)) {
    //Записываем ссылку на элемент в переменную obj
    var obj = document.getElementById(element_id);
    //Если css-свойство display не block, то: 
    if (obj.style.display != "block") {
      obj.style.display = "block"; //Показываем элемент
    } else obj.style.display = "none"; //Скрываем элемент
  }
  //Если элемент с id-шником element_id не найден, то выводим сообщение
  else alert("Элемент с id: " + element_id + " не найден!");
}

function convert() {

  var input = document.getElementById("name").value;
  var input1 = document.getElementById("line").value;
  document.getElementById("key").innerHTML = input1.slice(0, 4);
  document.getElementById("lo1").innerHTML = input.slice(0, 4);
  document.getElementById("ro1").innerHTML = input.slice(4, 8);
  var outputText = document.getElementsByClassName('lo');
  var outputText1 = document.getElementsByClassName('ro');
  var outputText2 = document.getElementsByClassName('xo');

  tableAscii(input, 0, 4, outputText);
  tableAscii(input, 4, 8, outputText1);
  tableAscii(input1, 0, 4, outputText2);

}

function tableAscii(text, a, b, outputText) {
  var table = document.getElementById('table-ascii');
  var textL = text.slice(a, b);
  var output = '';
  for (var i = 0; i < textL.length; i++) {
    for (var j = 1; j <= table.rows.length; j++) {
      var row = table.rows[j];
      if (textL[i] === row.cells[0].innerText) {
        output = output + row.cells[1].innerText + ' ';
        break;
      }
    }
  }

  for (var i = 0; i < outputText.length; i++) {
    outputText[i].value = '';
    outputText[i].value = output;
  }

  // outputText.value = output;
}

function fold() {
  var input = document.getElementById('ro').value;
  var input1 = document.getElementById('xo').value;
  var outputText3 = document.getElementsByClassName('result');
  input = parseInt(input.replace(/\s+/g, ''), 2);
  input1 = parseInt(input1.replace(/\s+/g, ''), 2);
  var vivod = (input + input1).toString(2);

  if (vivod.length > 8) {
    vivod = vivod.slice(1, 33);
    for (var i = 0; i < outputText3.length; i++) {
      outputText3[i].value = '';
      outputText3[i].value = vivod.slice(0, 4) + ' ' + vivod.slice(4, 8) + ' ' + vivod.slice(8, 12) + ' ' + vivod.slice(12, 16) + ' ' + vivod.slice(16, 20) + ' ' + vivod.slice(20, 24) + ' ' + vivod.slice(24, 28) + ' ' + vivod.slice(28, 32);
    }
  }else{
    for (var i = 0; i < outputText3.length; i++) {
      outputText3[i].value = '';
      outputText3[i].value = vivod.slice(0, 4) + ' ' + vivod.slice(4, 8) + ' ' + vivod.slice(8, 12) + ' ' + vivod.slice(12, 16) + ' ' + vivod.slice(16, 20) + ' ' + vivod.slice(20, 24) + ' ' + vivod.slice(24, 28) + ' ' + vivod.slice(28, 32);
    }
  }
}

function replace() {
  var table2 = document.getElementById('table2');
  var input = document.getElementById('result').value;
  var outputText = document.getElementById('replacement');
  var outputText1 = document.getElementById('replacement2');
  var outputText2 = document.getElementsByClassName('replacement3');
  var a = 0, b = 4;
  var vivod1 = '';
  var vivod2 = '';
  var vivod3 = '';
  var vivod4 = ''
  var num = '';
  var i = 0;
  for (var j = 1; j <= table2.rows[0].cells.length; j++) {
    if (i <= input.length) {
      num = parseInt(input.slice(a, b), 2);
      vivod1 = vivod1 + ' ' + parseInt(input.slice(a, b), 2);
      a = a + 5;
      b = b + 5;
      i = i + 5;
    }else{
      break;
    }
    loop1:
      for (var k = 1; k <= table2.rows.length; k++) {
        var row = table2.rows[k];
        if (num == parseInt(table2.rows[k].cells[0].innerText)) {
          vivod2 = vivod2 + row.cells[j].innerText+ ' ';
          vivod3 = vivod3 + parseInt(row.cells[j].innerText)+' ';
          break loop1;
        }
      }
  }
  var count = '';
  for (var i = 0; i < vivod3.length; i++){
    if (vivod3[i] != ' ' && vivod3[i+1]!= ' ' ){
      var c = (vivod3[i])+(vivod3[i+1]);
      vivod4 = vivod4+parseInt((vivod3[i])+(vivod3[i+1])).toString(2);
      i=i+2;
    }else{
      if (vivod3[i] != ' '){
        if (parseInt(vivod3[i]).toString(2).length ===4){
        vivod4 =vivod4 + parseInt(vivod3[i]).toString(2);
        i=i+1;
      }else{
        count = parseInt(vivod3[i]).toString(2);
        for (var j = (parseInt(vivod3[i]).toString(2)).length; j < 4 ;j++){
          count = '0'+count;
        }
        vivod4 =vivod4 + count;
        i=i+1;
      }
      }else if (vivod3[i] === ' '){
        break;
      }
    }
  }
  //console.log(vivod3);
 vivdod4 = vivod4.replace(/\s+/g, '');
  outputText.value = '';
  outputText1.value = '';
  outputText.value = vivod1;
  outputText1.value = vivod2;
  for (var i = 0; i < outputText2.length; i++) {
    outputText2[i].value = '';
    outputText2[i].value = vivod4.slice(0, 4) + ' ' + vivod4.slice(4, 8) + ' ' + vivod4.slice(8, 12) + ' ' + vivod4.slice(12, 16) + ' ' + vivod4.slice(16, 20) + ' ' + vivod4.slice(20, 24) + ' ' + vivod4.slice(24, 28) + ' ' + vivod4.slice(28, 32);
  }
}

function shift(){
  var input = document.getElementById('replacement3').value;
  var outputText = document.getElementsByClassName('replacement4');
  var vivod;
  input = input.replace(/\s+/g, '');
  vivod =input.slice(11,32) + input.slice(0,11);
  for (var i = 0; i < outputText.length; i++) {
    outputText[i].value = '';
    outputText[i].value = vivod.slice(0, 4) + ' ' + vivod.slice(4, 8) + ' ' + vivod.slice(8, 12) + ' ' + vivod.slice(12, 16) + ' ' + vivod.slice(16, 20) + ' ' + vivod.slice(20, 24) + ' ' + vivod.slice(24, 28) + ' ' + vivod.slice(28, 32);
  }
}
function xorCalculate(){
  var input = document.getElementById('lo').value;
  var input1 = document.getElementById('replacement4').value;
  var outputText7 = document.getElementById('xorOutput');
  outputText = '';
  var vivod = '';
input = input.replace(/\s+/g, '');
input1 = input1.replace(/\s+/g, '');
for (var i = 0; i <input.length ;i++){
  if ( input[i] ===input1[i]){
 vivod= vivod + '0';
 console.log(vivod);
  }else{
    vivod = vivod + '1'
  }
}

outputText7.value = vivod;
}