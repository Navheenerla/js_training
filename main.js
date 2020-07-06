
var list1 = [];
var list2 = [];
var list3 = [];

var n = 1;
var x = 0;


function addRow(){
    var addRow = document.getElementById('show');
    var newRow = addRow.insertRow(n);
    // first get values
    list1[x] = document.getElementById('billAmount').value;
    list2[x] = document.getElementById('service').value;
    list3[x] = document.getElementById('people').value;

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];

    n++;
    x++;
}