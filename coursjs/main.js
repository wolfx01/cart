// function generate() {
//   // جلب القيم من المدخلات في صفحة index
//   let studentName = document.getElementById("studentName").value;
//   let studentAge = document.getElementById("studentAge").value;
//   let schoolName = document.getElementById("schoolName").value;
//   let grade1 = document.getElementById("grade1").value;
//   let grade2 = document.getElementById("grade2").value;
//   let grade3 = document.getElementById("grade3").value;
//   let grade4 = document.getElementById("grade4").value;
//   let grade5 = document.getElementById("grade5").value;

//   // الحفظ في الذاكرة المحلية (localStorage)
//   localStorage.setItem("nomEleve", studentName);
//   localStorage.setItem("ageEleve", studentAge);
//   localStorage.setItem("ecoleEleve", schoolName);
//   localStorage.setItem("grade1", grade1);
//   localStorage.setItem("grade2", grade2);
//   localStorage.setItem("grade3", grade3);
//   localStorage.setItem("grade4", grade4);
//   localStorage.setItem("grade5", grade5);

//   // الانتقال إلى صفحة عرض التقرير بعد حفظ البيانات
//   window.location.href = "./user.html";
// }

// // تنفيذ الكود التالي تلقائياً عند تحميل الصفحة
// window.onload = function() {
//   // التأكد من أننا في صفحة user.html التي تحتوي على عناصر العرض
//   if (document.getElementById("displayName")) {
//     // استرجاع البيانات من الذاكرة المحلية وعرضها
//     document.getElementById("displayName").textContent = localStorage.getItem("nomEleve").toUpperCase();
//     document.getElementById("displayId").textContent = Math.floor(Math.random() * 1000000);
//     document.getElementById("displayAge").textContent = localStorage.getItem("ageEleve");
//     document.getElementById("displaySchool").textContent = localStorage.getItem("ecoleEleve");
//     document.getElementById("displayGrade1").textContent = localStorage.getItem("grade1");
//     document.getElementById("displayGrade2").textContent = localStorage.getItem("grade2");
//     document.getElementById("displayGrade3").textContent = localStorage.getItem("grade3");
//     document.getElementById("displayGrade4").textContent = localStorage.getItem("grade4");
//     document.getElementById("displayGrade5").textContent = localStorage.getItem("grade5");
//     document.getElementById("displayAvg").textContent = (parseInt(localStorage.getItem("grade1")) + parseInt(localStorage.getItem("grade2")) + parseInt(localStorage.getItem("grade3")) + parseInt(localStorage.getItem("grade4")) + parseInt(localStorage.getItem("grade5")) / 5).toFixed(2);
//     document.getElementById("displayHighest").textContent = Math.max(localStorage.getItem("grade1"), localStorage.getItem("grade2"), localStorage.getItem("grade3"), localStorage.getItem("grade4"), localStorage.getItem("grade5"));
//     document.getElementById("displayLowest").textContent = Math.min(localStorage.getItem("grade1"), localStorage.getItem("grade2"), localStorage.getItem("grade3"), localStorage.getItem("grade4"), localStorage.getItem("grade5"));
//     document.getElementById("displayRounded").textContent = Math.round(parseInt(localStorage.getItem("grade1")) + parseInt(localStorage.getItem("grade2")) + parseInt(localStorage.getItem("grade3")) + parseInt(localStorage.getItem("grade4")) + parseInt(localStorage.getItem("grade5")) / 5);
//     document.getElementById("displayBonus").textContent = Math.floor(Math.random() * 10);
//     document.getElementById("displayFinal").textContent = Math.floor(parseInt(localStorage.getItem("grade1")) + parseInt(localStorage.getItem("grade2")) + parseInt(localStorage.getItem("grade3")) + parseInt(localStorage.getItem("grade4")) + parseInt(localStorage.getItem("grade5")) / 5) + Math.floor(Math.random() * 10);
//     document.getElementById("displayGrade").textContent = Math.floor(parseInt(localStorage.getItem("grade1")) + parseInt(localStorage.getItem("grade2")) + parseInt(localStorage.getItem("grade3")) + parseInt(localStorage.getItem("grade4")) + parseInt(localStorage.getItem("grade5")) / 5) + Math.floor(Math.random() * 10);
//   }
// }

function generate() {
  let studentName = document.getElementById("studentName").value;
  let studentAge = document.getElementById("studentAge").value;
  let schoolName = document.getElementById("schoolName").value;
  let grade1 = document.getElementById("grade1").value;
  let grade2 = document.getElementById("grade2").value;
  let grade3 = document.getElementById("grade3").value;
  let grade4 = document.getElementById("grade4").value;
  let grade5 = document.getElementById("grade5").value;
  localStorage.setItem("nomEleve", studentName);
  localStorage.setItem("ageEleve", studentAge);
  localStorage.setItem("ecoleEleve", schoolName);
  localStorage.setItem("grade1", grade1);
  localStorage.setItem("grade2", grade2);
  localStorage.setItem("grade3", grade3);
  localStorage.setItem("grade4", grade4);
  localStorage.setItem("grade5", grade5);
  window.location.href = "./user.html";
}
  window.onload = function () {
    if (document.getElementById("displayName")) {
      document.getElementById("displayName").textContent =localStorage.getItem("nomEleve").toUpperCase();
      document.getElementById("displayId").textContent = Math.floor(Math.random() * 1000000,);
    }
  }

