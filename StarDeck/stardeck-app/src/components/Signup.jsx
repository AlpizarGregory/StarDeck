import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { MdLockOutline, MdLockOpen, MdLockPerson, MdLocationPin, MdPerson, MdPersonPin, MdMail } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

// Component that stores all the Create Account screen and features
export function Signup() {
    // The attibutes of the new user
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [nacionality, setNacionality] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [avatar, setAvatar] = useState("");
    const history = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/signup", { //PLACEHOLDER PARA URL DEL API
                name,
                nickname,
                nacionality,
                password,
                confirmPassword,
                avatar,
            });
            history.push("/login");
        } catch (err) {
            console.error(err);
        }
    }
    // Function that verifies if all the data in the form follows the restrictions
    function verifyData(){
        setAvatar("https://robohash.org/"+nickname)
        console.log(avatar)

        if (password !== confirmPassword){
            alert("Las contraseñas no coinciden")
        }

        if (password.length !== 8){
            alert("La contraseña debe estar compuesta exactamente por 8 caracteres")
        }

        if (name ===""){
            alert("Informacion incompleta, nombre sin rellenar")
        }
        if (nickname ===""){
            alert("Informacion incompleta, nombre de usuario sin rellenar")
        }
        
    
    }

    return (
        <div className="bg-gradient-to-b from-cyan-900 via-cyan-700 to-indigo-900 h-screen w-screen  container ">
            <h1 className="text-bold w-fit m-auto pt-28 text-gray-200 text-2xl mb-5">Crear una cuenta de Stardeck &copy;</h1>
            <Form onSubmit={handleSubmit} className=" w-[292px] m-auto mt-8" >
                <Form.Group className=" my-3" controlId="formBasicName">
                    <div>
                        <MdPerson className=" w-4 h-4 absolute mt-4 -ml-6 text-gray-200" />
                        <Form.Control 
                            className=" hover:border-sky-500 text-gray-100 peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-sky-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            type="text"
                            placeholder="Nombre completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div >
                </Form.Group>

                <Form.Group className="  my-3" controlId="formBasicNickname">
                    <MdPersonPin className=" w-4 h-4 absolute mt-4 -ml-6 text-gray-200" />
                    <Form.Control maxLength={30}
                        className=" hover:border-sky-500 text-gray-200 peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-sky-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        type="text"
                        placeholder="Nombre de usuario"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="  my-3" controlId="formBasicNacionality">
                    <MdLocationPin className=" w-4 h-4 absolute mt-4 -ml-6 text-gray-200" />
                    <select value={nacionality}  className="hover:border-sky-500 text-gray-200 peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-sky-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" data-te-select-init onChange={(e) => { setNacionality(e.target.value) }}>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Estados Unidos">Estados Unidos</option>
                        <option value="Mexico">Mexico</option>
                        

                    </select>
                    
                </Form.Group>

                <Form.Group className=" my-3" controlId="formBasicPassword">
                    <MdLockOpen className=" w-4 h-4 absolute mt-4 -ml-6 text-gray-200" />
                    <Form.Control maxLength={8}
                        className=" hover:border-sky-500 text-gray-200 peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-sky-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="  my-3" controlId="formBasicConfirmPassword">
                    <MdLockOutline className=" w-4 h-4 absolute mt-4 -ml-6 text-gray-200" />
                    <Form.Control maxLength={8}
                        className=" hover:border-sky-500 text-gray-200 peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-sky-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        type="password"
                        placeholder="Confirmar contraseña"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>

                

                <Button onClick={verifyData} className="bg-slate-900 hover:bg-slate-700 text-center font-bold text-gray-200 py-2 px-4 rounded mt-7 ml-24" variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>
        </div>
    );
}

export default Signup;