const generateTable = function() {
  // console.log(this.responseText);
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

 // const updateTable = function () {
 //   console.log("hi");
 //  xmlReq = new XMLHttpRequest();
 //  xmlReq.addEventListener('data',generateTable);
 //  xmlReq.open("POST",'storeData');
 //  xmlReq.send();
 // }

const displayUserName = function() {
  let name = this.responseText;
  document.getElementById("userNameLabel").innerText = name;
}

const getUser = function(){
  generateTable();
  xmlReq = new XMLHttpRequest();
  xmlReq.addEventListener('load',displayUserName);
  xmlReq.open("GET",'userName');
  xmlReq.send();
}
window.onload = getUser;
//window.onload = generateTable;
