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
  if (input.length != 8) {
    
    alert("В поле ФИО должно быть 8 символов!");
  } else {
    if (input1.length < 4) {
      alert("В поле Ключ должно быть минимум 4 символа! Записанный в тетраде ключ, должен быть равен 32 символам, включай пробелы!!!");
    } else {
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
  }

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
  } else {
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
  var a = 0,
    b = 4;
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
    } else {
      break;
    }
    loop1:
      for (var k = 1; k <= table2.rows.length; k++) {
        var row = table2.rows[k];
        if (num == parseInt(table2.rows[k].cells[0].innerText)) {
          vivod2 = vivod2 + row.cells[j].innerText + ' ';
          vivod3 = vivod3 + parseInt(row.cells[j].innerText) + ' ';
          break loop1;
        }
      }
  }
  var count = '';
  for (var i = 0; i < vivod3.length; i++) {
    if (vivod3[i] != ' ' && vivod3[i + 1] != ' ') {
      var c = (vivod3[i]) + (vivod3[i + 1]);
      vivod4 = vivod4 + parseInt((vivod3[i]) + (vivod3[i + 1])).toString(2);
      i = i + 2;
    } else {
      if (vivod3[i] != ' ') {
        if (parseInt(vivod3[i]).toString(2).length === 4) {
          vivod4 = vivod4 + parseInt(vivod3[i]).toString(2);
          i = i + 1;
        } else {
          count = parseInt(vivod3[i]).toString(2);
          for (var j = (parseInt(vivod3[i]).toString(2)).length; j < 4; j++) {
            count = '0' + count;
          }
          vivod4 = vivod4 + count;
          i = i + 1;
        }
      } else if (vivod3[i] === ' ') {
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

function shift() {
  var input = document.getElementById('replacement3').value;
  var outputText = document.getElementsByClassName('replacement4');
  var vivod;
  input = input.replace(/\s+/g, '');
  vivod = input.slice(11, 32) + input.slice(0, 11);
  for (var i = 0; i < outputText.length; i++) {
    outputText[i].value = '';
    outputText[i].value = vivod.slice(0, 4) + ' ' + vivod.slice(4, 8) + ' ' + vivod.slice(8, 12) + ' ' + vivod.slice(12, 16) + ' ' + vivod.slice(16, 20) + ' ' + vivod.slice(20, 24) + ' ' + vivod.slice(24, 28) + ' ' + vivod.slice(28, 32);
  }
}

function xorCalculate() {
  var input = document.getElementById('lo').value;
  var input1 = document.getElementById('replacement4').value;
  var outputText7 = document.getElementById('xorOutput');
  outputText = '';
  var vivod = '';
  input = input.replace(/\s+/g, '');
  input1 = input1.replace(/\s+/g, '');
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input1[i]) {
      vivod = vivod + '0';
      console.log(vivod);
    } else {
      vivod = vivod + '1'
    }
  }

  outputText7.value = vivod;
}

//List2
function checkMultiplication() {
  var inputP = document.getElementById("pInput").value;
  var inputQ = document.getElementById("qInput").value;
  var outputTextN = document.getElementsByClassName('nOutput');
  var n = 0;
  if (1 <= parseInt(inputP) < 100) {
    for (var i = 2; i < parseInt(inputP); i++) {
      var l = parseInt(inputP) % i;
      if (l == 0) {
        alert('p - не простое число, введи другое!');
        break;
      }
    }
    if (1 <= parseInt(inputQ) < 100) {
      for (var i = 2; i < parseInt(inputQ); i++) {
        var k = parseInt(inputQ) % i;
        if (k == 0) {
          console.log(k);
          alert('q - не простое число, введи другое!');
          break;
        }
      }

      if (k != 0 && l != 0) {
        n = parseInt(inputP) * parseInt(inputQ);
        for (var i = 0; i < outputTextN.length; i++) {
          outputTextN[i].value = '';
          outputTextN[i].value = n;
        }
      }
    }
  }
}

function eulerFunction() {
  var inputP = document.getElementById("pInput").value;
  var inputQ = document.getElementById("qInput").value;
  var outputTextPhi = document.getElementsByClassName('phiOutput');
  var m = (parseInt(inputP) - 1) * (parseInt(inputQ) - 1);
  outputTextPhi[0].value = '';
  outputTextPhi[0].value = (`(${inputP}-1)*(${inputQ}-1)=${parseInt(inputP)-1}*${parseInt(inputQ)-1}=${(parseInt(inputP)-1)*(parseInt(inputQ)-1)}`);
  for (var i = 1; i < outputTextPhi.length; i++) {
    outputTextPhi[i].value = '';
    outputTextPhi[i].value = m;
  }
}




function checkD() {
  var inputD1 = document.getElementById("dInput1").value;
  var outputD = document.getElementsByClassName('dInput');
  var outputTextPhi = document.getElementById('phiOutput').value;
  if (inputD1 == '') {
    alert('Значение не заданно!');
  } else {
    if (parseInt(inputD1) < parseInt(outputTextPhi)) {
      var k = 0;
      for (var i = 2; i <= parseInt(inputD1); i++) {
        if (parseInt(inputD1) % i == 0 && parseInt(outputTextPhi) % i == 0) {
          k = 1;
          alert('d - имеет общие делители с функцией Эйлера !');
          outputD[0].value = '';
          outputD[1].value = '';
          break;
        }
      }
      if (k === 0) {
        for (var i = 0; i < outputD.length; i++) {
          outputD[i].value = '';
          outputD[i].value = parseInt(inputD1);
        }
      }
    }
  }

}

function checkD2() {
  // var inputD1 = document.getElementById("dInput1").value;
  var outputD = document.getElementsByClassName('dInput');
  var outputTextPhi = document.getElementById('phiOutput').value;
  var result = 0;
  var k = 0;
  outputD[0].value = '';
  outputD[1].value = '';

  if (parseInt(outputTextPhi) <= 100) {

    while (k != 1) {
      loop1: {
        result = randomInteger(2, (parseInt(outputTextPhi) - 1));
        console.log(result);
        for (var i = 2; i <= result; i++) {
          if (result % i == 0 && parseInt(outputTextPhi) % i == 0) {
            k = 0;
            break loop1;
          } else {
            k = 1;
          }

        }
      }
    }
  } else {
    while (k != 1) {
      loop2: {
        result = randomInteger(2, 100);
        console.log(result);
        for (var i = 2; i <= result; i++) {
          if (result % i == 0 && parseInt(outputTextPhi) % i == 0) {
            k = 0;
            break loop2;
          } else {
            k = 1;
          }
        }
      }
    }
  }

  for (var i = 0; i < outputD.length; i++) {
    outputD[i].value = '';
    outputD[i].value = result;
  }
}



function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function checkE() {
  var inputD = document.getElementById('dInput2').value;
  var inputTextPhi = document.getElementById('phiOutput').value;
  var outputK = document.getElementById('kInput');
  var outputE = document.getElementsByClassName('eInput');
  var outputO = document.getElementsByClassName('oKey');
  var outputKKey = document.getElementsByClassName('sKey');
  var outputN = document.getElementById('nOutput').value;
  var outputSK = document.getElementById('KeySecretOutput');

  for (var k = 1; k <= parseInt(inputTextPhi); k++) {
    var m = ((((parseInt(inputTextPhi)) * k) + 1) % parseInt(inputD));
    if (m === 0) {
      for (var i = 0; i < outputE.length; i++) {
        outputE[i].value = '';
        outputE[i].value = (((parseInt(inputTextPhi)) * k) + 1) / parseInt(inputD);
      }
      outputK.value = '';
      outputK.value = k;
      break;
    }
  }
  for (var i = 0; i < outputO.length; i++) {
    outputO[i].value = '';
    outputO[i].value = (`${outputE[0].value},${outputN}`);
  }
  for (var i = 0; i < outputKKey.length; i++) {
    outputKKey[i].value = '';
    outputKKey[i].value = (`${inputD},${outputN}`);
  }
  outputSK.value = (`(${inputD},${outputN})`);
}

function encrypt() {
  var inputMessege = document.getElementById('sencryptedMessage').value;
  var outputSencrypted = document.getElementsByClassName('sencryptedMessage1');
  var table = document.getElementById('table-cipher');
  var output = '';
  if (inputMessege.length == 3 && inputMessege[2] !== ' ') {
    var output = '';
    for (var i = 0; i < inputMessege.length; i++) {
      for (var j = 1; j <= table.rows.length; j++) {
        var row = table.rows[j];
        if (inputMessege[i] === row.cells[0].innerText) {
          output = output + row.cells[1].innerText + ' ';
          break;
        }
      }
    }

    for (var i = 0; i < outputSencrypted.length; i++) {
      outputSencrypted[i].value = '';
      outputSencrypted[i].value = output;
    }
  } else {
    if (inputMessege.length == 3) {
      var output = '';
      console.log(inputMessege.toUpperCase());
      if (inputMessege == inputMessege.toUpperCase()) {

        for (var i = 0; i < inputMessege.length; i++) {
          for (var j = 1; j <= table.rows.length; j++) {
            var row = table.rows[j];
            if (inputMessege[i] === row.cells[0].innerText) {
              if (inputMessege[i] == " ") {
                output = output + 34 + ' ';
                break;
              } else {
                output = output + row.cells[1].innerText + ' ';
                break;
              }
            }
          }
        }
      }
      for (var i = 0; i < outputSencrypted.length; i++) {
        outputSencrypted[i].value = '';
        outputSencrypted[i].value = output;
      }
    } else {
      alert("Шифр должен состоять из 3 букв или 2 с пробелом");
    }
  }

}

function openMessage() {
  var inputSencrypted = document.getElementById('sencryptedMessage1').value;
  var inputE = (document.getElementById('eInput').value);
  var outputN = (document.getElementById('nOutput').value);
  var outputC1 = document.getElementsByClassName('sencryptedKey1');
  var outputC2 = document.getElementsByClassName('sencryptedKey2');
  var outputC3 = document.getElementsByClassName('sencryptedKey3');
  var outputCRY = document.getElementsByClassName('cryptogramOutput');
  var outputORi = document.getElementById('originalMessage');

  var number1 = 0;
  var number2 = 0;
  var number3 = 0;
  var k = 0;
  for (var i = 0; i <= inputSencrypted.length; i++) {
    if (inputSencrypted[i] == ' ') {
      if (number1 == 0) {
        number1 = ((inputSencrypted.slice(k, i)).trim());
        k = i;
      } else {
        if (number2 == 0) {
          number2 = ((inputSencrypted.slice(k + 1, i)).trim());
          k = i;

        }
        if (number3 == 0) {
          number3 = (inputSencrypted.slice(k, i).trim());
          k = i;
        }
      }
    }

  }


  for (var i = 0; i < outputC1.length; i++) {
    outputC1[i].value = '';
    outputC1[i].value = (BigInt(number1) ** BigInt(inputE)) % BigInt(outputN);
  }
  for (var i = 0; i < outputC2.length; i++) {
    outputC2[i].value = '';
    outputC2[i].value = (BigInt(number2) ** BigInt(inputE)) % BigInt(outputN);
  }
  for (var i = 0; i < outputC3.length; i++) {
    outputC3[i].value = '';
    outputC3[i].value = (BigInt(number3) ** BigInt(inputE)) % BigInt(outputN);
  }
  outputORi.value = (`(${number1},${number2},${number3})`);
  outputCRY[0].value = (`(${(outputC1[0].value)},${outputC2[0].value},${outputC3[0].value})`);
  outputCRY[1].value = (`(${(outputC1[0].value)},${outputC2[0].value},${outputC3[0].value})`);
}

function decipherMessage() {
  var inputD = document.getElementById('dInput2').value;
  var outputN = document.getElementById('nOutput').value;
  var outputC1 = document.getElementById('sencryptedKey1').value;
  var outputC2 = document.getElementById('sencryptedKey2').value;
  var outputC3 = document.getElementById('sencryptedKey3').value;
  var outputM1 = document.getElementById('decrypted1');
  var outputM2 = document.getElementById('decrypted2');
  var outputM3 = document.getElementById('decrypted3');
  var originalMessage = document.getElementById('originalMessage1');



  outputM1.value = '';
  outputM1.value = (BigInt(outputC1) ** BigInt(inputD)) % BigInt(outputN);


  outputM2.value = '';
  outputM2.value = (BigInt(outputC2) ** BigInt(inputD)) % BigInt(outputN);


  outputM3.value = '';
  outputM3.value = (BigInt(outputC3) ** BigInt(inputD)) % BigInt(outputN);
  originalMessage.value = (`(${(outputM1.value)},${outputM2.value},${outputM3.value})`);

}

// Task3 
//
//
function submitSurname() {
  var inputSurname = document.getElementById('surname').value;
  var outputSubmitSurname1 = document.getElementsByClassName('submitSurname1');
  var table = document.getElementById('table-cipher');
  var output = '';
  var fam = document.getElementsByClassName('famili');
  inputSurname = inputSurname.trim();


  if (inputSurname.length !== '') {
    for (var i = 0; i < inputSurname.length; i++) {
      for (var j = 1; j <= table.rows.length; j++) {
        var row = table.rows[j];
        if (inputSurname[i] === row.cells[0].innerText) {
          output = output + row.cells[1].innerText + ' ';
          break;
        }
      }
    }
    for (var i = 0; i < outputSubmitSurname1.length; i++) {
      outputSubmitSurname1[i].value = '';
      outputSubmitSurname1[i].value = output;
    }
    for (var i = 0; i < fam.length; i++) {
      fam[i].value = '';
      fam[i].value = inputSurname;
    }
    fam
  } else {
    alert("Введите совю фамилию, в первое поле ввода!");
  }
}

function calculateImage(){
  var inputH = document.getElementById('vector').value;
  var inputn = document.getElementById('nOutput').value;
  var inputSubmitSurname = document.getElementById('submitSurname1').value;
  var outputH = document.getElementsByClassName('numberH');
  var hash = document.getElementById('hash');
  var j = 0;
  var k = 0;
  var number = '';
  var number1 =inputH;
  for (var i = 0 ; i<=inputSubmitSurname.length;i++){
    if (inputSubmitSurname[i] == ' '){
      number = ((inputSubmitSurname.slice(k, i)).trim());
        k = i;
        outputH[j].value = (`H${j+1} =(H${j}+M${j+1})^2mod n =(${number1}+${number})^2mod(${inputn}) = ${((BigInt(number1)+ BigInt(number))**BigInt(2))%BigInt(inputn)}`) ;
        number1 =((BigInt(number1)+ BigInt(number))**BigInt(2))%BigInt(inputn) ;
        j++;
        console.log(j);
    }
    hash.value = number1;
  }
  for(var i =j;i<outputH.length;i++){
    outputH[i].value = '';
  }
  //hash.value = number1;
  
}