function tabuada() {
  let num = document.getElementById("txtN");
  let tab = document.getElementById("seltab");

  if (num.value.length == 0) {
    window.alert("Digite um número.");
  } else {
    let n = Number(num.value);
    let c = 1;

    //Limpa o select tab para quando o usuario escolher outro número, apagar o anterior
    tab.innerHTML = "";
    while (c <= 10) {
      //cria elementos que não foram feitos anteriormente no html
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab ${c}`;
      tab.appendChild(item);
      c++;
    }
  }
}
