let student ={
    id : "MERN11",
    fullname : "John",
    grades : 94,
}

let student1 = [];

function student2(id, fullname, grades){
    student1.push(id, fullname, grades);
}
student2(3, "Smith", 98);
student2(4, "Natasha", 96);

console.log(student1);

function student3(id, fullname, grades){
    student1.pop(id, fullname, grades);
}

student3();
console.log(student1);