
const sexo=true //Constante siempre va a valer lo mismo

var miEdad=24;
var miNombre="Diego Castillo"
var estatura= 1.78
/*console.log("mi edad es:", miEdad)
console.log("mi edad es: " + miEdad)
console.log("mi nombre es ", miNombre)
if (sexo==true)
    console.log("Sexo es Masculino")
else
    console.log("Sexo es Femenino")

if(miEdad>=18 && estatura >=1.5)
    {console.log("Eres mayor de edad y tienes altura permitida")}
else
    console.log("no puedes ingresar")

let numero=5
if(numero>0)
    console.log("numero positivo")

var i=0;
while (i<=10) 
{
 console.log(i)
 i++   
}
for(let j=0;j<=10;j++)
{console.log(j)}
*/
var x=""
function saludo(nombre,edad)
    {
        console.log("Hola buen día "+nombre+" y tengo "+edad+ " años");
    }
//saludo("Diego", 29)

function factorial(x)
    {
        var fact=1
        for(var i=1;i<=x;i++)
        {
            fact=fact*i
            //console.log(fact)
        }
    return fact
    }

/*function ecuacion()
{
    console.log("Ingrese los datos")
    c=prompt("Ingrese el coeficiente 'a' de la ecuacion ax + b")
    x=prompt("Ingrese la variable de la ecuación")
    b=prompt("Ingrese el término b de la ecuación ax + b")

    console.log("la ecuación {0}",a)
}
*/
/*document.write("esta es una escritura en el documento")
var escribir
escribir=prompt("quieres saber si funciona...","si")
document.write(escribir) */

//arrays
document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>")
var materias=["matematicas","fisica","quimica","biología"]
for(var i=0;i<materias.length;i++)
{
    document.write("<tr>")
    document.writeln("<td><b>"+materias[i] +"</td></b>")
}
doc

var arreglo=new Array(10)
for(var m=0;m <arreglo.length;m++)
{
    arreglo[m]=m+1
}

for(var j in arreglo){ document.writeln(arreglo[j])}