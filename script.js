var mayor=0

function evaluar(nombre,edad){
    console.log(nombre, edad)
    if (edad>=18){
        alert(nombre+' SI es mayor de edad')
        if (edad>mayor){
            mayor=edad
            usuario=nombre
        }
    }else{
         alert(nombre+' NO es mayor de edad')
    }
}
for(i=1;i<4;i++){
    var nombre= prompt('Ingrese el nombre del usuario '+i)
    var edad= parseInt(prompt('De '+nombre+ ' ingrese su edad')) 
    evaluar(nombre,edad)
}
alert('De los tres usuarios ingresados '+ usuario + ' es el/la mayor y su edad es ' + mayor+' años.')