// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    let stepOne = document.querySelector('.informationone');
    let stepTwo = document.querySelector('.informationtwo');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
        stepOne.classList.add('disappear');
        stepTwo.classList.add('appear');
      }, false);
    });
  }, false);
})();

// Show or Hide Password string
$(document).ready(function () {
  $("#show_hide_password a").on('click', function (event) {
    event.preventDefault();
    if ($('#show_hide_password input').attr("type") == "text") {
      $('#show_hide_password input').attr('type', 'password');
      $('#show_hide_password i').addClass("fa-eye-slash");
      $('#show_hide_password i').removeClass("fa-eye");
    } else if ($('#show_hide_password input').attr("type") == "password") {
      $('#show_hide_password input').attr('type', 'text');
      $('#show_hide_password i').removeClass("fa-eye-slash");
      $('#show_hide_password i').addClass("fa-eye");
    }
  });
});

// // Switch between Jobseeker, Employer, Facilitator forms --- radio buttons
// let jobSeeker = document.getElementById("radiojobseeker");
// let employer = document.getElementById("radioemployer");
// let facilitator = document.getElementById("radiofacilitator");
// // link forms to by element name
// let jobSeekerForm = document.getElementById("jobseeker");
// let employerForm = document.getElementById("employer");
// let facilitatorForm = document.getElementById("facilitator");
// // initial state of forms
// jobSeekerForm.style.display = "block";
// employerForm.style.display = "none";
// facilitatorForm.style.display = "none";

// jobSeeker.addEventListener("click", showJSForm);
// function showJSForm() {
//   jobSeekerForm.style.display = "block";
//   employerForm.style.display = "none";
//   facilitatorForm.style.display = "none";
// };
// employer.addEventListener("click", showEmpForm);
// function showEmpForm() {
//   employerForm.style.display = "block";
//   jobSeekerForm.style.display = "none";
//   facilitatorForm.style.display = "none";
// };
// employer.addEventListener("click", showFacForm);
// function showFacForm() {
//   jobSeekerForm.style.display = "none";
//   employerForm.style.display = "none";
//   facilitatorForm.style.display = "block";
// };
