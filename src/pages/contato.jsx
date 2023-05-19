import { api } from '../lib/axios';
import { useState } from 'react';

export function Contact() {

    const [formData, setFormData ] = useState({
        Nome: '',
        Cidade: '',
        Telefone: '',
        Email: '',
        Mensagem: ''
    });

    async function sendEmail(event) { 
        event.preventDefault(); 
        try {
            await api.post('src/contato', formData);
            alert("Obrigado por enviar uma mensagem! Responderemos o mais breve possível");

        } catch(err){    
            alert("Houve uma falha no envio da sua mensagem", err);
        }        
    }

    function getInputData(event){
        const value = event.target.value
        const key = event.target.name
        setFormData(current => ({
            ...current,
            [key]: value
        }));
    }

    return (
        <form className="pt-8" onSubmit={sendEmail}>
            <h1 className="text-center text-4xl py-8">Deixe sua mensagem</h1>
            <p className="text-base md:text-lg px-6 md:px-12 indent-8">Se preferir, pode nos enviar uma mensagem diretamente por aqui. Retornaremos o mais breve possível, e será um prazer lhe atender.</p>
            <div className="md:flex flex-col my-2 text-base md:text-lg px-8 md:mx-72 ">
                <p>Nome</p>
                <input 
                    name="Nome" 
                    value={formData.Nome}
                    type="text" 
                    placeholder="Digite seu nome..." 
                    className="px-2 my-2 text-black bg-slate-100 w-80 md:w-[40rem] h-10 rounded-md"
                    onChange={getInputData}
                />
                <p>Cidade</p>
                <input
                     name="Cidade"
                     value={formData.Cidade}
                     type="text"
                      placeholder="Digite seu e-mail..." 
                      className="px-2 my-2 text-black bg-slate-100 w-80 md:w-[40rem] h-10 rounded-md"
                      onChange={getInputData}
                />
                <p>Telefone</p>
                <input 
                    name="Telefone"
                    value={formData.Telefone}
                    type="text" 
                    placeholder="Digite seu telefone..." 
                    className="px-2 my-2 text-black bg-slate-100 w-80 md:w-[40rem] h-10 rounded-md"
                    onChange={getInputData}
                />
                <p>E-mail</p>
                <input
                    name="Email"
                    value={formData.Email}
                    type="text"
                    placeholder="Digite sua mensagem..."
                    className="px-2 my-2  text-black bg-slate-100 w-80 md:w-[40rem] h-10 rounded-md"
                    onChange={getInputData}
               />
                <p>Mensagem</p>
                <textarea 
                    name="Mensagem"
                    value={formData.Mensagem}
                    placeholder="Digite aqui sua mensagem..." 
                    className="px-2 my-2 text-lg text-black bg-slate-100 w-80 md:w-[40rem] h-48 rounded-md"
                    onChange={getInputData}
                />
                <button className="bg-black text-white w-80 md:w-[40rem] py-4 my-4 rounded-md text-2xl hover:bg-gray-800">Enviar</button>
            </div>            
        </form>
    )
}