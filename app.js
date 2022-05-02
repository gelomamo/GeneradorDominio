let pronombre = ['el', 'nuestro' , 'vuestro' , 'mi'];
let adjetivo = ['genial','gran','pequeño','pobre'];
let nombre = ['circo','zoo','secreto','cotilleo'];
let extension = ['.es','.com','.org'];
let dominios = [] ;


function generarDominio () {
    for (let con1=0; con1<pronombre.length ; con1++) {
        for (let con2=0; con2<adjetivo.length ; con2++) {
            for (let con3=0; con3<nombre.length ; con3++) {
                for (let con4=0; con4<extension.length ; con4++) {
                   dominios.push(pronombre[con1]+adjetivo[con2]+nombre[con3]+extension[con4]);
                   console.log (dominios);
                }
            }
        }
    }
    return dominios;
}

let dominios_final = generarDominio ();
let impresion = document.getElementById("imprimir");
impresion.innerHTML = dominios_final;
