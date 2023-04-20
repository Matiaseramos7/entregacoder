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
        <form onSubmit={handleSubmit} className="text-white">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" className="bg-white text-black mr-10 p-2"/>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefono" className="bg-white text-black mr-10 p-2"/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="bg-white text-black mr-10 p-2"/>
            <button>Generar orden</button>
        </form>
    )
}

export default ContactForm