function solve() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var c = Number(document.getElementById("c").value);

  var discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    document.getElementById("result").innerHTML = "Уравнение имеет решения в поле комплексных чисел: x1 = " 
    + -b / (2 * a) + " + " + Math.sqrt(-discriminant) + "i / " + (2 * a) + ", x2 = " 
    + -b / (2 * a) + " - " + Math.sqrt(-discriminant) + "i / " + (2 * a);
  } else if (discriminant == 0) {
    var x = -b / (2 * a);
    document.getElementById("result").innerHTML = "Уравнение имеет одно решение: x = " + x;
  } else {
    var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    document.getElementById("result").innerHTML = "Уравнение имеет два решения: x1 = " + x1 + ", x2 = " + x2;
  }
}
