function agecalc() {
  const dd = document.getElementById("dd").value;
  const mm = document.getElementById("mm").value;
  const yy = document.getElementById("yy").value;
  const color = "hsl(0, 100%, 67%)";
  let isValid = true;

  if (dd === "" || isNaN(dd) || dd > 31 || dd < 1) {
    document.getElementById("dderror").innerHTML =
      dd === "" ? "This field is required" : "Must be a valid day";
    document.getElementById("dderror").hidden = false;
    document.getElementById("dd").style.borderColor = color;
    isValid = false;
  } else {
    document.getElementById("dderror").hidden = true;
    document.getElementById("dd").style.borderColor = "";
  }

  if (mm === "" || isNaN(mm) || mm > 12 || mm < 1) {
    document.getElementById("mmerror").innerHTML =
      mm === "" ? "This field is required" : "Must be a valid month";
    document.getElementById("mmerror").hidden = false;
    document.getElementById("mm").style.borderColor = color;
    isValid = false;
  } else {
    document.getElementById("mmerror").hidden = true;
    document.getElementById("mm").style.borderColor = "";
  }

  if (yy === "" || isNaN(yy)) {
    document.getElementById("yyerror").innerHTML =
      yy === "" ? "This field is required" : "Must be a valid year";
    document.getElementById("yyerror").hidden = false;
    document.getElementById("yy").style.borderColor = color;
    isValid = false;
  } else {
    document.getElementById("yyerror").hidden = true;
    document.getElementById("yy").style.borderColor = "";
  }

  if (!isValid) {
    return false;
  }
  const today = new Date();
  const birthDate = new Date(yy, mm - 1, dd);

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += prevMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById("rdd").innerHTML = ageDays + " ";
  document.getElementById("rmm").innerHTML = ageMonths + " ";
  document.getElementById("ryy").innerHTML = ageYears + " ";
}
