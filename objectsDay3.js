/*

Lab 1 - Object

Create an object that will include a student's info with the following values:
- Name (with your own name)
- Age (with any age)
- inClass (having a boolean value stating if you're in class or not)

Now do the following with the oject:
- Display the object to the user (on the screen)
- Display just the name of the student variable 
- Change "Age" another number.
- Display the student's Age 

*/

// let student ={
//     name: `Derek`,
//     age: 35,
//     inClass: true
// }
// console.log(student)  //  Display the object to the user (on the screen)
// console.log(student.name) // Display just the name of the student variable 

// student.age = 36
// console.log(student.age)



/*

Create an object for a "Teacher" with the following properties
- Name (with anyone's name)
- Classes (with an empty array)
- currentlyTeaching (true or false, your choice)

Now with the above object do the following:
- Add a new class name (of your choice) to the "Classes" array 
- Add another class.
- Display the Teacher's Name
- Display the Teacher's Classes
- Display the full Teacher Object

*/

// let teacher = {
//     name: `Damian`,
//     classes:[],
//     currentlyTeaching: true,
// }


// teacher.classes.push(`Javascript`)
// teacher.classes.push("Node.js")

// console.log(teacher.name)
// console.log(teacher.classes)
// console.log(teacher)


/*

Lab 3 - Object

Create an object for a "TeacherAssistant" with the following properties
- Name 
- inClass (with true or false)

Now with the above object do the following:
- Display the TeacherAssistant object
- Add a new "property" called "Classes" with an empty array.
- Add a new class name (just string) to the newly added property
- Display the TeacherAssistant Object.

*/


let teacherAssistant = {
    name: "Manny",
    inClass: false
}

console.log(teacherAssistant)
teacherAssistant.classes = []
teacherAssistant.classes.push("python")
console.log(teacherAssistant)

