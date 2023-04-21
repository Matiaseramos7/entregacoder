import { useState } from "react"

const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
    const handleSubmit = () => {
        const userData = {
            name, phone, email
        }

        
        onConfirm(userData)
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white flex flex-col justify-center content-center items-center text-center">
            <div class="mt-10 mb-3">
                <label for="exampleInputEmail1" class="text-blue-500 mr-5">Correo electrónico</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="bg-white text-black mr-10 p-2 border border-gray-200"/>
            </div>
            <div class="mb-3">
                <label for="nombre" class="text-blue-500 mr-5">Nombre</label>
                <input value={name} id="name" onChange={(e) => setName(e.target.value)} placeholder="Nombre" className="bg-white text-black mr-10 p-2 border border-gray-200"/>
            </div>
            <div class="mb-3">
                <label for="phone" class="text-blue-500 mr-5">Telefono</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefono" className="bg-white text-black mr-10 p-2 border border-gray-200"/>
            </div>
            <button type="submit" class="rounded-xl bg-green-500 hover:bg-green-300 text-white p-5 m-2 text-2xl ">Generar orden</button>
        </form>

    )
}

export default ContactForm