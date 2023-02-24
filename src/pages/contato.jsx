export function Contact() {
    return (
        <form className="pt-28">
            <h1 className="text-5xl py-8 text-center">Deixe sua mensagem</h1>
            <p className="text-lg text-center">Se preferir, pode nos enviar uma mensagem diretamente por aqui. Retornaremos o mais breve possível, e será um prazer lhe atender.</p>
            <div className="mx-72 my-8">
                <div className="flex space-x-96">
                    <p>Nome</p>
                    <p>Cidade</p>
                </div>
                <div className="flex space-x-10 my-2">
                    <input type="text" placeholder="Digite seu nome..." className="px-2 text-lg text-black bg-[#D9D9D9] w-96 h-10 rounded-md"/>
                    <input type="text" placeholder="Digite seu e-mail..." className="px-2 text-lg text-black bg-[#D9D9D9] w-96 h-10 rounded-md"/>
                </div>
                <div className="flex space-x-96">
                    <p>Telefone</p>
                    <p>E-mail</p>
                </div>
                <div className="flex space-x-10 my-2">
                    <input type="text" placeholder="Digite seu telefone..." className="px-2 my-2 text-lg text-black bg-[#D9D9D9] w-96 h-10 rounded-md"/>
                    <input type="text" placeholder="Digite seu e-mail..." className="px-2 text-lg text-black bg-[#D9D9D9] w-96 h-10 rounded-md"/>
                </div>    
                    <p>Mensagem</p>
                    <textarea placeholder="Digite aqui sua mensagem..." className="px-2 my-2 text-lg text-black bg-[#D9D9D9] w-[51rem] h-48 rounded-md"/>
                    <button className="bg-black text-white px-96 py-4 rounded-md text-2xl hover:bg-gray-800">Enviar</button>
            </div>            
        </form>
    )
}