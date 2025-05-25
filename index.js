import { get,post,del} from "./metodos.js";

const[metodo,param]= process.argv.slice(2);
const opcion = metodo.toUpperCase();

switch (opcion){
    case "GET":
        get(param);
        break; 
    case "POST":    
        post(process.argv.slice(4));
        break;
    case "DELETE":
        del(param);
        break;
    default:
        console.log(`${opcion} no es una opcion valida`)        


}











