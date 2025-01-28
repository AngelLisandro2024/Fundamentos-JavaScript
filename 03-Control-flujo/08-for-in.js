let user = {
    id: 1,
    name: "juan",
    edad: 17,
};
for (let propiedad in user) {
    console.log(propiedad, user[propiedad]);
}

let animales = ["caballo","perro","juan"];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}