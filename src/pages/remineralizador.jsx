import Image from "next/image"

export function Remineralizer() {
    return (
        <article>
                <h1 className="pt-40 md:pt-28 text-5xl text-center">Remineralizador</h1>
                <div className="text-2xl md:text-lg px-12 md:px-20">
                    <p className="py-8 text-justify md:text-center">Em janeiro de 2023, obtivemos junto ao Ministério da Agricultura, Pecuária e Abastecimento o registro do remineralizador de solos, e agora podemos atender ao público agro também!</p>
                    <div className="md:mx-48">
                        <Image 
                            src="/estabelecimento.png" 
                            alt="Certificado de registro do estabelecimento"
                            className="border-black"                            
                            width={900} 
                            height={1400} 
                            title="Certificado de registro do estabelecimento" 
                        />
                        <Image src="/produto.png" alt="Certificado de registro do produto" width={900} height={1400} title="Certificado de registro do produto" />
                    </div>
                </div>
			</article>
    )
}