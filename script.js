const convertbutton = document.querySelector(".click");
const input25 = document.querySelector(".in2");
const input35 = document.querySelector(".in1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img1");
const text1 = document.querySelector(".mu");
const text2 = document.querySelector(".mo");
const place = document.querySelector(".in3");

function covertvalues() {
  const inputvalue = document.querySelector(".in3").value;
  const inputval2 = document.querySelector(".in2").value;
  const inputval3 = document.querySelector(".in1").value;
  const br3 = document.querySelector(".BR3");
  const ur3 = document.querySelector(".US3");

  //Real para//

  const dolar = 6.11;
  const euro = 6.42;
  const libra = 7.75;
  const bitcoin = 648.366;
  const real = 1;

  const valconvDol = inputvalue / dolar;
  const valconvEur = inputvalue / euro;
  const valconvlibra = inputvalue / libra;
  const valconvBitcoin = inputvalue / bitcoin;
  const valconvReal = inputvalue / real;

  if (inputval2 == "dolar") {
    ur3.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valconvDol);
  } else if (inputval2 == "euro") {
    ur3.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valconvEur);
  } else if (inputval2 == "libra") {
    ur3.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(valconvlibra);
  } else if (inputval2 == "bitcoin") {
    ur3.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "BTC",
    }).format(valconvBitcoin);
  } else if (inputval2 == "real") {
    ur3.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valconvReal);
  }

  //Dolar para//

  const dolar1 = 1;
  const real1 = 6.11;
  const euro1 = 0.95;
  const libra1 = 0.78;
  const bitcoin1 = 0.0000094617;

  const valconvDol1 = inputvalue * dolar1;
  const valconvEur2 = inputvalue * euro1;
  const valconvlibra3 = inputvalue * libra1;
  const valconvBitcoin4 = inputvalue * bitcoin1;
  const valconvReal5 = inputvalue * real1;

  if (inputval2 == "dolar" && inputval3 == "val2") {
    ur3.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valconvDol1);
  } else if (inputval2 == "euro" && inputval3 == "val2") {
    ur3.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valconvEur2);
  } else if (inputval2 == "libra" && inputval3 == "val2") {
    ur3.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(valconvlibra3);
  } else if (inputval2 == "bitcoin" && inputval3 == "val2") {
    ur3.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "BTC",
    }).format(valconvBitcoin4);
  } else if (inputval2 == "real" && inputval3 == "val2") {
    ur3.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valconvReal5);
  }

  //Libra para//
  const dolar2 = 1.05;
  const real2 = 6.46;
  const euro2 = 1;
  const libra2 = 0.82;
  const bitcoin2 = 0.000010218610827;

  const valconvDol2 = inputvalue * dolar2;
  const valconvEur1 = inputvalue * euro2;
  const valconvlibra2 = inputvalue * libra2;
  const valconvBitcoin2 = inputvalue * bitcoin2;
  const valconvReal2 = inputvalue * real2;

  if (inputval2 == "dolar" && inputval3 == "val3") {
    ur3.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valconvDol2);
  } else if (inputval2 == "euro" && inputval3 == "val3") {
    ur3.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valconvEur1);
  } else if (inputval2 == "libra" && inputval3 == "val3") {
    ur3.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(valconvlibra2);
  } else if (inputval2 == "bitcoin" && inputval3 == "val3") {
    ur3.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "BTC",
    }).format(valconvBitcoin2);
  } else if (inputval2 == "real" && inputval3 == "val3") {
    ur3.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valconvReal2);
  }

  //parte de converção de moeda//

  if (inputval3 == "val1") {
    br3.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputvalue);
  } else if (inputval3 == "val2") {
    br3.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputvalue);
  } else if (inputval3 == "val3") {
    br3.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputvalue);
  }
}

function changc() {
  if (input25.value == "dolar") {
    text1.innerHTML = "Dólar Americano";
    img2.src = "img/estados-unidos (1) 1.png";
  } else if (input25.value == "euro") {
    text1.innerHTML = "Euro";
    img2.src = "img/euro 1.png";
  } else if (input25.value == "libra") {
    text1.innerHTML = "Libra Esterlina";
    img2.src = "img/libra 1.png";
  } else if (input25.value == "bitcoin") {
    text1.innerHTML = "Bitcoin";
    img2.src = "img/bitcoin 1.png";
  } else if (input25.value == "real") {
    text1.innerHTML = "Real Brasileiro";
    img2.src = "img/brasil 2.png";
  }

  covertvalues();
}

function changh() {
  if (input35.value == "val1") {
    text2.innerHTML = "Real Brasileiro";
    img3.src = "img/brasil 2.png";
    place.placeholder = "R$ 100000";
  } else if (input35.value == "val2") {
    text2.innerHTML = "Dólar Americano";
    img3.src = "img/estados-unidos (1) 1.png";
    place.placeholder = "$ 100000";
  } else if (input35.value == "val3") {
    text2.innerHTML = "Euro";
    img3.src = "img/euro 1.png";
    place.placeholder = "€ 100000";
  }

  covertvalues();
}

input35.addEventListener("input", changh);
input25.addEventListener("input", changc);
convertbutton.addEventListener("click", covertvalues);
