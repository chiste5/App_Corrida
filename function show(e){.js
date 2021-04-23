function show(e){
  var operacao = e.value;
  dist = parseFloat(document.getElementById("dist").value);
  min = parseFloat(document.getElementById("min").value);
  taxf = 2.00;
  temp = 0.26*min;
  di = dist*1.40;
  var valc = taxf+di+temp;
  paragrafo.innerHTML = "O valor da sua corrida deu R$"+valc.toFixed(2);
}