import * as Iconos from 'react-icons/fa';
const Login = ({ name }) => {
    return (
        <div className="text-center flex flex-col items-center content-center text-1 mt-5">
            <a className="text-4xl text-stone-300 hover:text-orange-300" href='www.google.com'><Iconos.FaUser /></a>
            <h1 className="text-slate-300">{name}</h1>
        </div>
    )
}

export default Login