function Saludo(nombre, idioma = "es") {
    if (idioma === "es") {
        return "Hola, " + nombre;
    } else if (idioma === "en") {
        return "Hello, " + nombre;
    }
    return "Idioma no soportado";
}
console.log(generarSaludo("Tomas", "es"));
console.log(generarSaludo("Violet", "en"));
