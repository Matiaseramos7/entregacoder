import portada from './img/reloj_digital.png';
import './Welcome.css';
import {Link} from 'react-router-dom';

const Welcome = () => {
   return (
    <div className="flex flex-col content-center justify-items-center items-center w-full text-teal-600">
        <h1 className="text-5xl mb-5 hover:scale-110 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Bienvenido a CucuStore</h1>
        <div className="flex flex-row w-3/5">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-4xl mb-5 font-semibold">Bienvenido</h3>
            <p className="text-2xl w-full text-slate-300">En esta pagina encontraras muchos modelos de relojes para cada una de tus necesidades. </p>
            <div className="flex flex-row justify-center items-center">
              <button className='w-30 h-15 hover:bg-blue-300 bg-teal-600 text-black py-4 px-5 mt-5 font-bold rounded-xl'> <Link to='/catalog'>Ver Catalogo</Link></button>
            </div>
          </div> 
          <img className="max-w-screen-md h-full" src={portada} alt="reloj"/>
        </div>        
    </div>
    
   )
 }
 
 export default Welcome