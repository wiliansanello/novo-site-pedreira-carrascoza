export function Contact() {
    return (
        <form className="pt-40 md:pt-28 bg-gray-200">
            <h1 className="text-center text-5xl py-8">Deixe sua mensagem</h1>
            <p className="text-center text-2xl md:text-lg px-12 md:px-20">Se preferir, pode nos enviar uma mensagem diretamente por aqui. Retornaremos o mais breve possível, e será um prazer lhe atender.</p>
            <div className="md:flex md:space-x-10 my-2 text-lg px-8 md:mx-72 ">
                <p>Nome</p>
                <input type="text" placeholder="Digite seu nome..." className="px-2 my-2 text-black border-solid-black w-96 h-10 rounded-md"/>
                <p>Cidade</p>
                <input type="text" placeholder="Digite seu e-mail..." className="px-2 my-2 text-black w-96 h-10 rounded-md"/>
                <p>Telefone</p>
                <input type="text" placeholder="Digite seu telefone..." className="px-2 my-2 text-black w-96 h-10 rounded-md"/>
                <p>E-mail</p>
                <input type="text" placeholder="Digite seu e-mail..." className="px-2 my-2  text-black w-96 h-10 rounded-md"/>
                <p>Mensagem</p>
                <textarea placeholder="Digite aqui sua mensagem..." className="px-2 my-2 text-lg text-black w-96 h-48 rounded-md"/>
                <button className="bg-black text-white px-40 md:px-96 py-4 rounded-md text-2xl hover:bg-gray-800">Enviar</button>
            </div>            
        </form>
    )
}