import portada from './img/reloj_digital.png';
import './Welcome.css';

const Welcome = () => {
   return (
    <div className="flex flex-col content-center justify-items-center items-center w-full text-gray-600">
        <h1 className="text-5xl mb-5 hover:scale-110 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Bienvenido a CucuStore</h1>
        <div className="flex flex-row w-3/5">
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl w-full text-slate-300">En esta pagina encontraras muchos modelos de relojes para cada una de tus necesidades. </p>
          </div> 
          <img className="max-w-screen-md h-full" src={portada} alt="reloj"/>
        </div>        
    </div>
    
   )
 }
 
 export default Welcome