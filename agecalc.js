function agecalc() {
  dd = document.getElementById("dd").value;
  mm = document.getElementById("mm").value;
  yy = document.getElementById("yy").value;

  rd = dd;
  rm = mm;
  ry = yy;

  document.getElementById("rdd").innerHTML = rd + " ";
  document.getElementById("rmm").innerHTML = rm + " ";
  document.getElementById("ryy").innerHTML = ry + " ";
}
