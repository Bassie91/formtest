$(document).ready(function() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let qntYears = 100;
    let selectYear = $("#year");
    let selectMonth = $("#month");
    let selectDay = $("#date");
    let currentYear = new Date().getFullYear();
  
    for (var y = 0; y < qntYears; y++) {
      let date = new Date(currentYear);
      let yearElem = document.createElement("option");
      yearElem.value = currentYear
      yearElem.textContent = currentYear;
      selectYear.append(yearElem);
      currentYear--;
    }
  
    for (var m = 0; m < 12; m++) {
      let month = monthNames[m];
      let monthElem = document.createElement("option");
      monthElem.value = m;
      monthElem.textContent = month;
      selectMonth.append(monthElem);
    }
  
    var d = new Date();
    var month = d.getMonth();
    var year = d.getFullYear();
    var day = d.getDate();
  
    selectYear.val(year);
    selectYear.on("change", AdjustDays);
    selectMonth.val(month);
    selectMonth.on("change", AdjustDays);
  
    AdjustDays();
    selectDay.val(day)
  
    function AdjustDays() {
      var year = selectYear.val();
      var month = parseInt(selectMonth.val()) + 1;
      selectDay.empty();

  
      //get the last day, so the number of days in that month
      var days = new Date(year, month, 0).getDate();
  
      //lets create the days of that month
      for (var d = 1; d <= days; d++) {
        var dayElem = document.createElement("option");
        dayElem.value = d;
        dayElem.textContent = d;
        selectDay.append(dayElem);
      }
    }
  });

  function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let phone_number = document.forms["contactForm"]["phone_number"].value;
    let date_of_birth = document.forms["contactForm"]["date"].value + "/" + document.forms["contactForm"]["month"].value + "/" + document.forms["contactForm"]["year"].value;
    let acquisition = document.forms["contactForm"]["acquisition"].value;
    let message = document.forms["contactForm"]["message"].value;
    let file = document.forms["contactForm"]["fileToUpload"].value;
    let confirm = document.forms["contactForm"]["confirm"].checked;
    
    let name_error = document.getElementById("name_error")
    name_error.innerHTML = ""
    let email_error = document.getElementById("email_error")
    email_error.innerHTML = ""
    let phone_error = document.getElementById("phone_error")
    phone_error.innerHTML = ""
    let confirm_error = document.getElementById("confirm_error")
    confirm_error.innerHTML = ""


    let validate = true
    
    if (name == "") {
        let error = document.createElement("p")
        error.innerHTML = "Name is required"
        name_error.appendChild(error)
        document.getElementById("name").className = "error"
        validate = false
    }
    if (email == "") {
        let error = document.createElement("p")
        error.innerHTML = "Email is required"
        document.getElementById("email_error").appendChild(error)
        document.getElementById("email").className = "error"
        validate = false
    }
    if (phone_number == "") {
        let error = document.createElement("p")
        error.innerHTML = "Phone number is required"
        document.getElementById("phone_error").appendChild(error)
        document.getElementById("phone_number").className = "error"
        validate = false
    }
    if(!confirm) {
        let error = document.createElement("p")
        error.innerHTML = "You have to agree with T&Cs"
        document.getElementById("confirm_error").appendChild(error)
        validate = false
    }
    return validate
  }