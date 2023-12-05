const students = [
  {
    firstName: "F1",
    lastName: "L1",
    subjects: [
      {
        name: "S1",
        marks: [7, 8, 9],
      },
      {
        name: "S2",
        marks: [7, 7, 8, 9],
      },
    ],
  },

  {
    firstName: "F2",
    lastName: "L2",
    subjects: [
      {
        name: "S1",
        marks: [7, 8, 7, 9],
      },
      {
        name: "S2",
        marks: [9, 8, 9],
      },
    ],
  },

  {
    firstName: "F3",
    lastName: "L3",
    subjects: [
      {
        name: "S1",
        marks: [7, 9, 8, 9],
      },
      {
        name: "S2",
        marks: [8, 8, 9],
      },
    ],
  },
];

// 2. Calculezi media pentru fiecare student, la fiecare obiect:
// Parcurgi lista de studenți (students.forEach())

// Declaram variabila globala pentru suma globala a tuturor studentilor
let globalSum = 0;

students.forEach(function (student) {
  // Afisam numele compet
  console.log(student.firstName + " " + student.lastName);
  // Declaram  media notelor unui obiect
  let sumAverage = 0;

  // Pentru fiecare student parcurgi lista de obiecte(student.subjects.forEach())
  student.subjects.forEach(function (subject) {
    // Pentru fiecare obiect faci o sumă a tuturor notelor
    // Declaram variabila suma notelor unui obiect
    let sum = 0;

    // Parcurgem fiecare element din array-ul marks, valoarea acestui element o adaugam în variabilă declarata mai sus "sumAverage")
    subject.marks.forEach(function (mark) {
      sum += mark;
    });

    // Calculam media fiecarei materie
    let average = sum / subject.marks.length;
    console.log(
      "Media pentru",
      student.firstName + " " + student.lastName,
      "la materia",
      subject.name,
      "este",
      average
    );

    // Adumam totate mediile noteleor la fiecare obiect
    sumAverage += average;
  });

  // Calculam media fiecarui student la toate obiectele
  let studentAverage = sumAverage / student.subjects.length;
  console.log(
    "Media studentului",
    student.firstName + " " + student.lastName,
    "la toate obiectele este:",
    studentAverage
  );

  globalSum += studentAverage;
});

// Calculul mediei tuturor studentilor
let globalAverage = globalSum / students.length;
console.log("Media generala a tuturor studentilor este:", globalAverage);
