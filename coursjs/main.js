function generate() {
  window.location.href = "./user.html";
  let studentName = document.getElementById("studentName").value;
  let studentAge = document.getElementById("studentAge").value;
  let schoolName = document.getElementById("schoolName").value;
  let grade1 = document.getElementById("grade1").value;
  let grade2 = document.getElementById("grade2").value;
  let grade3 = document.getElementById("grade3").value;
  let grade4 = document.getElementById("grade4").value;
  let grade5 = document.getElementById("grade5").value;

  // الحفظ في الذاكرة المحلية
  localStorage.setItem("nomEleve", studentName);
  localStorage.setItem("ageEleve", studentAge);
  localStorage.setItem("ecoleEleve", schoolName);
  localStorage.setItem("grade1", grade1);
  localStorage.setItem("grade2", grade2);
  localStorage.setItem("grade3", grade3);
  localStorage.setItem("grade4", grade4);
  localStorage.setItem("grade5", grade5);

  document.getElementById("displayName").textContent = studentName;
  document.getElementById("displayAge").textContent = studentAge;
  document.getElementById("displaySchool").textContent = schoolName;
  document.getElementById("displayGrade1").textContent = grade1;
  document.getElementById("displayGrade2").textContent = grade2;
  document.getElementById("displayGrade3").textContent = grade3;
  document.getElementById("displayGrade4").textContent = grade4;
  document.getElementById("displayGrade5").textContent = grade5;
}
