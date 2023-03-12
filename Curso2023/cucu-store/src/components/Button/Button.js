const Button = (props) => {
    console.log(props)
    return <button onClick={props.callback} className="text-orange-600 mr-5 px-3.5 py-3.5 border border-orange-600">{props.label}</button>
}

export default Button