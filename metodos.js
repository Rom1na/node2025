export async function get(param) {
     
      
    try{
      const response = await fetch(`https://fakestoreapi.com/products/${param}`);
        

        // Leer la respuesta como texto primero
        const text = await response.text();
        

        // Verificar si la respuesta está vacía
        if (!text) {
            throw new Error("El producto no existe.");
           
        }

        // Convertir el texto a JSON
        const data = JSON.parse(text);
        

     /* 
      console.log(response.status);  //200  con id inexistente también.
      console.log(response.headers.get("content-type"));  //application/json; charset=utf-8 con id inexistente. también
      const data = await response.json();
      

      /* la comentada arriba  es la forma original que usaría si la api devolviera un status diferente a 200 cuando se intenta hacer
      una solicitud con id de producto inexistente, atrapando el error en esa instancia con response.ok */

      


      if(param.includes('/')){
            
        const producto = data;

        console.log('<---------------------------------------FORMATO CONSOLA------------------------------>')

        console.log(`id : ${producto.id}`);
        console.log(`Nombre : ${producto.title}`);
        console.log(`Precio : ${producto.price}`);
        console.log(`Descripción : ${producto.description}`);
        console.log(`Categoria : ${producto.category}`);

         console.log('<----------------------------------------------------------------------------------->\n\n')
        
        
        
        const producto2 ={id :producto.id,Nombre : producto.title,Precio : producto.price,Descripcion :producto.description,Categoria : producto.category}




        console.log('<---------------------------------------FORMATO DATO------------------------------>')

        console.log(producto2);


         console.log('<-------------------------------------------------------------------------------->')
        

    }else{
      
       const productos = data;
       productos.forEach(producto => {
         
        console.log(`id : ${producto.id}`);
        console.log(`Nombre : ${producto.title}`);
        console.log(`Precio : ${producto.price}`);
        console.log(`Descripción : ${producto.description}`);
        console.log(`Categoria : ${producto.category}`); 
        console.log('-----------------------------------------------------------------'); 
       });

       
       
        
    }



    } catch(error){
        
               
        console.error('Error al obtener datos:',error);

    }
    

};



export function post(params){
    const [title,price,category] = params; 
    const product = { title: title, price: price,category: category };
    const config ={
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
    };
    
    fetch('https://fakestoreapi.com/products', config)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

};


export function del(param) {
    if (!param.includes('/')) {
        console.log('Por favor, indique un id de producto');
        return;
    }

    fetch(`https://fakestoreapi.com/products/${param}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data === null) {
            console.log('El producto indicado no existe, por favor intentar nuevamente con un id válido.');
        } else {
            console.log("El siguiente producto fue eliminado:");
            console.log(data);
        }
    })
    .catch(error => console.error('Error:', error));
}
