export function Remineralizer() {
    return (
        <article>
                <h1 className="pt-8 text-4xl text-center">Remineralizador</h1>
                <div className="text-base md:text-lg sm:px-24 px-12 indent-8">
                    <p className="py-8 text-justify md:text-center">Em janeiro de 2023, obtivemos junto ao Ministério da Agricultura, Pecuária e Abastecimento o registro do remineralizador de solos, e agora podemos atender ao público agro também!</p>
                    <div className="flex flex-col md:mx-48">
                        <img 
                            src="/estabelecimento.png" 
                            alt="Certificado de registro do estabelecimento"
                            className="border-solid border-2 border-black my-4"                            
                            width={900} 
                            height={1400} 
                            title="Certificado de registro do estabelecimento" 
                        />
                        <img 
                            src="/produto.png" 
                            alt="Certificado de registro do produto" 
                            className="border-solid border-2 border-black"
                            width={900} 
                            height={1400} 
                            title="Certificado de registro do produto" 
                        />
                    </div>
                </div>
			</article>
    )
}