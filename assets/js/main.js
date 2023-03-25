//Current time
var currentDayEl = document.getElementById('currentDay');
currentDayEl.textContent = dayjs().format('dddd, MMMM DD');
// Setting up local storage to text
var fieldOneElText = localStorage.getItem('firstHour')
var fieldTwoElText = localStorage.getItem('secondHour')
var fieldThreeElText = localStorage.getItem('thirdHour')
var fieldFourElText = localStorage.getItem('fourthHour')
var fieldFiveElText = localStorage.getItem('fifthHour')
var fieldSixElText = localStorage.getItem('sixthHour')
var fieldSevenElText = localStorage.getItem('seventhHour')
var fieldEightElText = localStorage.getItem('eighthHour')
var fieldNineElText = localStorage.getItem('ninthHour')
// get save buttons
var saveBtn1El = document.getElementById('saveBtn1');
var saveBtn2El = document.getElementById('saveBtn2');
var saveBtn3El = document.getElementById('saveBtn3');
var saveBtn4El = document.getElementById('saveBtn4');
var saveBtn5El = document.getElementById('saveBtn5');
var saveBtn6El = document.getElementById('saveBtn6');
var saveBtn7El = document.getElementById('saveBtn7');
var saveBtn8El = document.getElementById('saveBtn8');
var saveBtn9El = document.getElementById('saveBtn9');

// Save input and store it 1
saveBtn1El.addEventListener('click', function() {
    var fieldOneEl = document.getElementById('field1');
    var fieldOneElText = fieldOneEl.value;
    localStorage.setItem('firstHour', fieldOneElText);
});
// Save input and store it 2
saveBtn2El.addEventListener('click', function() {
    var fieldTwoEl = document.getElementById('field2');
    var fieldTwoElText = fieldTwoEl.value;
    localStorage.setItem('secondHour', fieldTwoElText);
});
// Save input and store it 3
saveBtn3El.addEventListener('click', function() {
    var fieldThreeEl = document.getElementById('field3');
    var fieldThreeElText = fieldThreeEl.value;
    localStorage.setItem('thirdHour', fieldThreeElText);
});
// Save input and store it 4
saveBtn4El.addEventListener('click', function() {
    var fieldFourEl = document.getElementById('field4');
    var fieldFourElText = fieldFourEl.value;
    localStorage.setItem('fourthHour', fieldFourElText);
});
// Save input and store it 5
saveBtn5El.addEventListener('click', function() {
    var fieldFiveEl = document.getElementById('field5');
    var fieldFiveElText = fieldFiveEl.value;
    localStorage.setItem('fifthHour', fieldFiveElText);
});
// Save input and store it 6
saveBtn6El.addEventListener('click', function() {
    var fieldSixEl = document.getElementById('field6');
    var fieldSixElText = fieldSixEl.value;
    localStorage.setItem('sixthHour', fieldSixElText);
});
// Save input and store it 7
saveBtn7El.addEventListener('click', function() {
    var fieldSevenEl = document.getElementById('field7');
    var fieldSevenElText = fieldSevenEl.value;
    localStorage.setItem('seventhHour', fieldSevenElText);
});
// Save input and store it 8
saveBtn8El.addEventListener('click', function() {
    var fieldEightEl = document.getElementById('field8');
    var fieldEightElText = fieldEightEl.value;
    localStorage.setItem('eighthHour', fieldEightElText);
});
// Save input and store it 9
saveBtn9El.addEventListener('click', function() {
    var fieldNineEl = document.getElementById('field9');
    var fieldNineElText = fieldNineEl.value;
    localStorage.setItem('ninthHour', fieldNineElText);
});

// Text persists after refresh
var fieldOneEl = document.getElementById('field1').value = fieldOneElText;
var fieldTwoEl = document.getElementById('field2').value = fieldTwoElText;
var fieldThreeEl = document.getElementById('field3').value = fieldThreeElText;
var fieldFourEl = document.getElementById('field4').value = fieldFourElText;
var fieldFiveEl = document.getElementById('field5').value = fieldFiveElText;
var fieldSixEl = document.getElementById('field6').value = fieldSixElText;
var fieldSevenEl = document.getElementById('field7').value = fieldSevenElText;
var fieldEightEl = document.getElementById('field8').value = fieldEightElText;
var fieldNineEl = document.getElementById('field9').value = fieldNineElText;
