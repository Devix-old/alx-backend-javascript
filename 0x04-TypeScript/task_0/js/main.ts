export interface Student {
  firstName : string,
  lastName: string,
  age: number,
  location: string
}

const student1 : Student = {
  firstName: 'Mohamed',
  lastName: 'El Gharef',
  age: 29,
  location: 'Khouribga'
}
const student2 : Student ={
  firstName: 'Ilyass',
  lastName: 'El Gharef',
  age: 31,
  location: 'Khouribga'
}

const studentsList = [student1, student2]


const table = document.createElement("table");
const thead = document.createElement('thead');

const headerRow = document.createElement("tr");

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(headerRow);

Object.keys(studentsList[0]).map((res) => {
  const th = document.createElement("th");
  th.textContent = res
  headerRow.appendChild(th);
})

const tbody = document.createElement("tbody");
table.appendChild(tbody);
studentsList.map(student => {
  const bodyRow = document.createElement('th')
  tbody.appendChild(bodyRow);
  Object.values(student).map(value => {
    const td = document.createElement('td');
    td.textContent = value;
    bodyRow.appendChild(td);
  })
})



