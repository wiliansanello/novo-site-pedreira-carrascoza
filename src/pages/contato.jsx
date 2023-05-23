import { api } from '../lib/axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function Contact() {

    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData ] = useState({
        nome: '',
        cidade: '',
        telefone: '',
        email: '',
        mensagem: ''
    });

    async function sendEmail() { 
        try {
            await api.post('/contato.php', formData);
            alert('Obrigado por enviar uma mensagem! Responderemos o mais breve possível');

        } catch(err){    
            alert('Houve uma falha no envio da sua mensagem', err);
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
        <form className="pt-8" onSubmit={handleSubmit(sendEmail)}>
            <h1 className="text-center text-4xl py-8">Deixe sua mensagem</h1>
            <p className="text-base md:text-lg px-6 md:px-12 indent-8">Se preferir, pode nos enviar uma mensagem diretamente por aqui. Retornaremos o mais breve possível, e será um prazer lhe atender.</p>
            <div className="md:flex flex-col my-2 text-base md:text-lg px-8 md:mx-72 ">
                <p>Nome</p>
                {errors.nome && <span className="text-orange-400">Campo obrigatório</span>}
                <input 
                    {...register('nome', { required: true })} 
                    value={watch.nome}
                    type='text' 
                    placeholder='Digite seu nome...' 
                    className='px-2 my-2 text-black bg-slate-100 w-80 md:w-[40rem] h-10 rounded-md'
                    onChange={getInputData}                    
                />
                <p>Cidade</p>
                <input
                     {...register('cidade')}
                     value={watch.cidade}
                     type='text'
                      placeholder='Digite seu e-mail...' 
                      className='px-2 my-2 text-black bg-slate-100 w-80 md:w-[40rem] h-10 rounded-md'
                      onChange={getInputData}
                />
                <p>Telefone</p>
                {errors.telefone && <span className='text-orange-400'>Campo obrigatório</span>}
                <input 
                    {...register('telefone', { required : true})}
                    value={watch.telefone}
                    type='text' 
                    placeholder='Digite seu telefone...' 
                    className='px-2 my-2 text-black bg-slate-100 w-80 md:w-[40rem] h-10 rounded-md'
                    onChange={getInputData}
                />
                <p>E-mail</p>
                <input
                    {...register('email')}
                    value={watch.email}
                    type='text'
                    placeholder='Digite sua mensagem...'
                    className='px-2 my-2  text-black bg-slate-100 w-80 md:w-[40rem] h-10 rounded-md'
                    onChange={getInputData}
               />
                <p>Mensagem</p>
                <textarea 
                    {...register('mensagem', { required : true})}
                    value={watch.mensagem}
                    placeholder='Digite aqui sua mensagem...' 
                    className='px-2 my-2 text-lg text-black bg-slate-100 w-80 md:w-[40rem] h-48 rounded-md required:text-orange-400'
                    onChange={getInputData}
                />
                <button className='bg-black text-white w-80 md:w-[40rem] py-4 my-4 rounded-md text-2xl hover:bg-gray-800'>Enviar</button>
            </div>            
        </form>
    )
}