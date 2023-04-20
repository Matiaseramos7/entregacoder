import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Portada from '../components/Welcome/Welcome';
function Home() { 
    return (
   <div className='flex flex-col content-center justify-items-center items-center w-full'>
        <Portada/>
        <ItemListContainer greeting={"Todos los productos"}/>
   </div> 
    )
}

export default Home;