var student1 = {
    firstName: 'Mohamed',
    lastName: 'El Gharef',
    age: 29,
    location: 'Khouribga'
};
var student2 = {
    firstName: 'Ilyass',
    lastName: 'El Gharef',
    age: 31,
    location: 'Khouribga'
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var thead = document.createElement('thead');
var headerRow = document.createElement("tr");
document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(headerRow);
Object.keys(studentsList[0]).map(function (res) {
    var th = document.createElement("th");
    th.textContent = res;
    headerRow.appendChild(th);
});
var tbody = document.createElement("tbody");

studentsList.map(function (student) {
    var row = document.createElement('tr');
    Object.values(student).map(function (value) {
        var td = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
    });
    tbody.appendChild(row)
});
table.appendChild(tbody)
