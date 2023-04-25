export function Contact() {
    return (
        <form className="pt-8">
            <h1 className="text-center text-4xl py-4">Deixe sua mensagem</h1>
            <p className="text-base md:text-lg px-6 md:px-12 indent-8">Se preferir, pode nos enviar uma mensagem diretamente por aqui. Retornaremos o mais breve possível, e será um prazer lhe atender.</p>
            <div className="md:flex flex-col my-2 text-base md:text-lg px-8 md:mx-72 ">
                <p>Nome</p>
                <input type="text" placeholder="Digite seu nome..." className="px-2 my-2 text-black bg-slate-100 w-80 md:w-[40rem] h-10 rounded-md"/>
                <p>Cidade</p>
                <input type="text" placeholder="Digite seu e-mail..." className="px-2 my-2 text-black bg-slate-100 w-80 md:w-[40rem] h-10 rounded-md"/>
                <p>Telefone</p>
                <input type="text" placeholder="Digite seu telefone..." className="px-2 my-2 text-black bg-slate-100 w-80 md:w-[40rem] h-10 rounded-md"/>
                <p>E-mail</p>
                <input type="text" placeholder="Digite seu e-mail..." className="px-2 my-2  text-black bg-slate-100 w-80 md:w-[40rem] h-10 rounded-md"/>
                <p>Mensagem</p>
                <textarea placeholder="Digite aqui sua mensagem..." className="px-2 my-2 text-lg text-black bg-slate-100 w-80 md:w-[40rem] h-48 rounded-md"/>
                <button className="bg-black text-white w-80 md:w-[40rem] py-4 my-4 rounded-md text-2xl hover:bg-gray-800">Enviar</button>
            </div>            
        </form>
    )
}