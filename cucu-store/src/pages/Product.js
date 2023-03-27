
function  product  ({src, name, description}) {
   
    return ( 
         <div>
            <img src={src} alt={name}></img>
             <h1 className="text-4xl mb-5 font-semibold text-teal-600">{name}</h1>
             <p className="text-white"> {description}</p>
         </div>
    )
 }
 
 export default product;