
//Teniendo en cuenta que estamos hablando de una tienda. 


alert("Bienvenido a esta tienda, por favor ingrese hasta 5 productos para llevar")

let producto = ""

//For
for (i=0; i < 5; i++){
    producto  += prompt("Ingrese el producto") + ", "
}
alert ("Los productos elegidos son" + " " +  producto)

alert ("Tenemos ofertas en 'pantalon', 'medias', 'remeras'")

let oferta

//Do-while
do{
    oferta=prompt("Ingrese unos de los productos para conocer su importe de descuento").toLowerCase()
}
while(oferta==""){
    switch(oferta){
        case "pantalon":
            alert("Los pantalones tienen un 15% de descuento")
            break
        case "medias":
            alert("Las medias tienen un 10% de descuento")
            break
        case "remeras":
            alert("Las remeras tienen un 30% de descuento")
            break
        default:
            alert("El producto no tiene oferta")
            break
    }
}