import React from 'react';
import { FaInstagramSquare, FaFacebookMessenger, FaTwitterSquare, FaWhatsappSquare}  from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
  <div className="bg-gray-500 text-gray-100 mt-20">
    <div className="flex flex-row justify-center content-center items-center">
      <div className="mr-5 flex flex-col justify-center content-center items-center">
        <ul className='flex flex-row'>
          <li className='text-center text-2xl mr-5 w-5 h-5 text-pink-500'><a href="https://www.instagram.com/"><FaInstagramSquare/></a></li>
          <li className='text-center text-2xl mr-5 w-5 h-5 text-blue-500'><a href="https://www.facebook.com/messenger/?locale=es_LA"><FaFacebookMessenger/></a></li>
          <li className='text-center text-2xl mr-5 w-5 h-5 text-blue-500'><a href="https://twitter.com/"><FaTwitterSquare/></a></li>
          <li className='text-center text-2xl mr-5 w-5 h-5 text-green-500'><a href="https://www.whatsapp.com/"><FaWhatsappSquare/></a></li>
        </ul>
      </div> 
      
      <div className="col-md-3">
        <h3>Suscríbete</h3>
        <p className='mb-5'>Recibe nuestras promociones y novedades en tu correo electrónico</p>
        <form>
          <div className="form-group">
            <input type="email" className="rounded border border-gray-500 bg-white text-blue-400 p-2 text-center" placeholder="Correo electrónico"/>
          </div>
          <button type="submit" className="rounded bg-green-400 p-2 m-2 text-white hover:bg-green-200 hover:text-black">Suscribirme</button>
        </form>
      </div>
      <div className="col-md-3">
        <h3>Contacto</h3>
        <ul>
          <li><i className="fa fa-phone"></i> 1135874240</li>
          <li><i className="fa fa-envelope"></i> info@cucu-store.com</li>
          <li><i className="fa fa-map-marker"></i> Calle Falsa 123, Springfield</li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;