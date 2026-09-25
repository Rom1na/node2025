import { get,post,del} from "./metodos.js";

const[metodo,param]= process.argv.slice(2);
const opcion = metodo.toUpperCase();

console.log(process.argv.slice(4));

/*
   Con el if se evalúa que el usuario ingrese products y se usa directamente para la consulta en la url
*/

if (!param.includes('products')){
        console.log("Debe incluir 'products' en la estructura de la consulta ejemplo 'npm start GET products /18' ");
        }else{

            switch (opcion){
                case "GET":
                    get(param);
                    break; 
                case "POST":    
                    post(process.argv.slice(4));
                    break;
                case "DELETE":
                    console.log(param)
                    del(param);
                    break;
                default:
                    console.log(`${opcion} no es una opcion valida`)        
            }

}











