/* let user = {
    id: 1,
    email: "Angel@peos.com",
    name: "Angel",
    activo: true,
    recuperarClave: function () {
        console.log("Recuperando clave...");
    },
}; */

function crearUsuario(name, email) {
    return {
        id: 1,
        email,
        name: name,
        activo: true,
        recuperarClave: function () {
            console.log("Recuperando clave...");
        },
    };
}
let user1 = crearUsuario("Angel", "GUAJS@gmail.com");
let user2 = crearUsuario("Pepe", "pepe@gmail.com");

console.log(user1, user2);