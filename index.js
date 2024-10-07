$(document).ready(function () {
  $("#calcular").click(function () {
    var num1 = parseFloat($("#numero1").val());
    var num2 = parseFloat($("#numero2").val());

    if (isNaN(num1) || isNaN(num2)) {
      alert("Por favor, insira números válidos.");
      return;
    }

    var soma = num1 + num2;

    alert("A soma é: " + soma);
  });
});
