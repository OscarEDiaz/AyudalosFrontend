import { Navbar } from '../../components/navbar/Navbar';
import React, { useState } from 'react';
import '../../styles/register_page/registerPage.css';


export const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [orgName, setOrgName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [socMedia, setSocMedia] = useState('');

  const handleRegister = () => {
    // Here you can perform registration logic, such as sending data to a server
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
  };
    return (
        <div className='landing-page-main-frame'>
            <Navbar />
            <h2>Register</h2>
            <div className='fuckshit'>
                <form>
                    <div>
                        <label>Nombre de la Organización:</label>
                        <input
                            type="text"
                            value={orgName}
                            onChange={(e) => setSocMedia(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Nombre del Representante:</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Correo Electrónico:</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Telefono:</label>
                        <input
                            type="text"
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Red social:</label>
                        <input
                            type="email"
                            value={socMedia}
                            onChange={(e) => setSocMedia(e.target.value)}
                        />
                    </div>
                    <button type="button" onClick={handleRegister}>
                    Register
                    </button>
                </form>
        </div>
        </div>
    )
}
