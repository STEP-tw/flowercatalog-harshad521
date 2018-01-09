const generateTable = function() {
  console.log(data);
  console.log("hi");
  var table = document.getElementById("commentsTable");
  data.map(function(element,index){
    let row = table.insertRow(index);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerText = element.date;
    cell2.innerText = element.name;
    cell3.innerText = element.comment;
  });
}

window.onload = generateTable;
