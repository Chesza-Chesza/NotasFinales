document.write("<div class='container'>");
document.write("<h1 py-2>Notas Finales</h1>");
var student = prompt("Ingrese el nombre del estudiante", "Shirley Alvarado");
document.write("<div class='row'>");
document.write("<div class='col'>Estudiante: " + student + "</div>");

var carrier = prompt("Ingrese el nombre de la carrera", "Carrera");
document.write("<div class='row'>");
document.write("<div class='col'>Carrera: " + carrier + "</div>");
document.write("</div>");

//Primer ramo
var ramo_one = prompt("Ingrese el primer ramo", "Materia 1");
var nota_1_ramo_one = prompt("Ingrese nota 1 [" + ramo_one + "]", "7");
var nota_2_ramo_one = prompt("Ingrese nota 2 [" + ramo_one + "]", "6");
var nota_3_ramo_one = prompt("Ingrese nota 3 [" + ramo_one + "]", "8");
var nota_aprob_ramo_one = prompt("Ingrese la nota de aprobación para [" + ramo_one + "]", "7");

//Segundo ramo
var ramo_two = prompt("Ingrese el segundo ramo", "Materia 2");
var nota_1_ramo_two = prompt("Ingrese nota 1 [" + ramo_two + "]", "3");
var nota_2_ramo_two = prompt("Ingrese nota 2 [" + ramo_two + "]", "8");
var nota_3_ramo_two = prompt("Ingrese nota 3 [" + ramo_two + "]", "7");
var nota_aprob_ramo_two = prompt("Ingrese la nota de aprobación para [" + ramo_two + "]", "6");

//Tercer ramo
var ramo_three = prompt("Ingrese el tercer ramo", "Materia 3");
var nota_1_ramo_three = prompt("Ingrese nota 1 [" + ramo_three + "]", "7");
var nota_2_ramo_three = prompt("Ingrese nota 2 [" + ramo_three + "]", "5");
var nota_aprob_ramo_three = prompt("Ingrese la nota de aprobación para [" + ramo_three + "]", "8");

//Convirtiendo strings a números
nota_1_ramo_one = parseInt(nota_1_ramo_one);
nota_2_ramo_one = parseInt(nota_2_ramo_one);
nota_3_ramo_one = parseInt(nota_3_ramo_one);

nota_1_ramo_two = parseInt(nota_1_ramo_two);
nota_2_ramo_two = parseInt(nota_2_ramo_two);
nota_3_ramo_two = parseInt(nota_3_ramo_two);

nota_1_ramo_three = parseInt(nota_1_ramo_three);
nota_2_ramo_three = parseInt(nota_2_ramo_three);

//Promedios
var prom_ramo_one = (nota_1_ramo_one + nota_2_ramo_one + nota_3_ramo_one) / 3;
var prom_ramo_two = (nota_1_ramo_two + nota_2_ramo_two + nota_3_ramo_two) / 3;
var prom_ramo_three = (nota_1_ramo_three + nota_2_ramo_three) / 3;

document.write("<table class='table'>");
document.write("<thead class='thead-dark'>");
document.write("<tr>");
document.write("        <th scope='col-1'>Ramo</th>");
document.write("        <th scope='col-2'>Nota 1</th>");
document.write("        <th scope='col-3'>Nota 2</th>");
document.write("        <th scope='col-4'>Nota 3</th>");
document.write("        <th scope='col-5'>Promedio</th>");
document.write("</tr>");
document.write("</thead>");
document.write("<tbody>");
document.write("    <tr>");
document.write("        <th scope='row ramo1'>" + ramo_one + "</th>");
document.write("        <td class='nota_1'>" + nota_1_ramo_one + "</td>");
document.write("        <td class='nota_2'>" + nota_2_ramo_one + "</td>");
document.write("        <td class='nota_3'>" + nota_3_ramo_one + "</td>");
document.write("        <td class='nota_3'>" + prom_ramo_one + "</td>"); //Cambiar el class...
document.write("    </tr>");
document.write("    <tr>");
document.write("        <th scope='row ramo2'>" + ramo_two + "</th>");
document.write("        <td class='nota_1'>" + nota_1_ramo_two + "</td>");
document.write("        <td class='nota_2'>" + nota_2_ramo_two + "</td>");
document.write("        <td class='nota_3'>" + nota_3_ramo_two + "</td>");
document.write("        <td class='nota_3'>" + prom_ramo_two + "</td>"); //Cambiar el class...
document.write("    </tr>");
document.write("    <tr>");
document.write("        <th scope='row ramo3'>" + ramo_three + "</th>");
document.write("        <td class='nota_1'>" + nota_1_ramo_three + "</td>");
document.write("        <td class='nota_2'>" + nota_2_ramo_three + "</td>");
document.write("        <td class='nota_3'>-</td>");
document.write("        <td class='nota_3'>-</td>"); //Cambiar el class...
document.write("    </tr>");
document.write("</tbody>");
document.write("</table>");