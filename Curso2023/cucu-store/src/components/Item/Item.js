
const Item = ({ item }) => {
    let s = './img/reloj_' + {item};
    let nombre = 'reloj'+{item};
    return (
        <div>
            <img src={s} alt={nombre}/>
            
        </div>
    )
}

export default Item