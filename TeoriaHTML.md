TEORIA HTML

Toda pagina web debe tener un archivo que se llame index.html para marcarla como principal

ETIQUETAS

<html> -> etiqueta inicial
    <head> -> encabezado
    <body> -> cuerpo


para poner un css el lugar correcto es mediante un enlace en la cabecera

<link rel="stylesheet" href="x"> -> link para archivo css


<h1> -> titulo 1
<h2> -> titulo 2
<h3> -> titulo 3
<h4> -> titulo 4
<im scr = "x"> -> Insertar imagen. scr para poner la url en x
<p> -> parrafo
<br> -> salto de linea
<center> -> texto centrado
<div> -> para dividir areas de la pagina, agrua conjuntos que formaran otros elementos mayores.


<table border = "x"> -> inicio de tabla. border para añadir un borde.
    <tr> -> fila .
        <td colspan="x" o rowspan="x"> -> texto dentro de la fila. uno por cada columna que queramos. Colspan para hacer que la celda ocupe mas celdas a la derecha. Rowspan para hacer que la celda ocupe mas espacio por debajo.
        
        <th> -> cabecera


<y style:"backgroundcolor: x;"> -> aributo para añadir un color en el fondo para esa etiqueta en cuestion. style para darle un atributo de css dentro del archivo html. x puede ser el nombre de un color o rgb(x, y, z); NO se debe utilizar

<x id="x"> el id marca a esa etiqueta como unica en todo el archivo. Para un elemento que tenga un estilo independiente al resto de los elementos de la pagina

<x class="x"> el class agrupara en una clase a todas las etiquetas que lo lleven (programacion orientada a objetos) para todos los elementos que queramos que tengan el mismo estilo.

para incluir un enlace se utilica <a href="https://facebook.com">x</a> siendo x cualquier texto o imagen



FLEXBOX

display: flex; -> crear un contenedor flex en este area

flex-flow: row wrap; -> obligar estar los elementos en la misma linea 

align-items: stretch; -> alieacion en el eje y

flex-grow: 1; -> valor de crecimiento de las celdas.


CSS

.nombredeclase{
    atributos
}
etiquetadehtml{
    atributos
}

Atributos de CSS

backgroundcolor: x;  x puede ser el nombre de un color o rgb(x, y, z);

border: "x"; para tablas x puede ser cualquier numero normalmente 1

padding: x; para añadir sangria al elemento con un cantidad de pixeles x

float: x; para cambiar de lado el objeto en cuestion x puede ser left o rigth 

position: x; para imagenes para que permita escribir por debajo o una imagen encima (relative) o para que ocupe el espacio donde esta y no se pueda escribir por encima ni poner una imagen encima 

clear: x; para dejar espacio a la derecha o a la izquierda para que no de ponga nada al lado de un elemento que no ocupa todo el espacio disponible

