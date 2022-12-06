const language = "es"

switch(language){
    case "fr":
        console.log("bonjour")
        break
    case "en":
        console.log("Hello")
        break
    case "es" || "ru":
        console.log("hola")
        break
    default:
        console.log("please choose a valid language")
}