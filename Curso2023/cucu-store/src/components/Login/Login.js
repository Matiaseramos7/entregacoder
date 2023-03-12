import user from './img/user.svg'
const Login = ({ name }) => {
    return (
        <div>
            <img src={user} alt="usuario"/>
            <h1 className="text-2xl text-amber-600">{name}</h1>
        </div>
    )
}

export default Login