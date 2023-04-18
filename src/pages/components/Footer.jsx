import { HiOutlineEnvelope } from 'react-icons/hi2';
import { MdPhone } from 'react-icons/md'

export function Footer(){

    return (
        <footer className="sm:px-1 lg:px-4 py-2 w-full sm:h-36 lg:h-32 bg-slate-200">
            <div className="flex flex-row justify-center text-center text-lg md:text-base mb-4">
                <p>2023 Pedreira Carrascoza LTDA © | </p>
                <p className="ml-1">Mapa do Site</p>
            </div>           
            <div className="flex flex-col text-center md:justify-center md:flex-row text-lg md:text-base mb-8 md:mb-0">
                <p>Horário de Atendimento: </p>
                    <p className="ml-1">Segunda a Sexta: 6:00 - 17:00 </p>
                    <p className="mx-1 hidden md:block">|</p>
                    <p className="ml-1">Sábado: 6:00 - 11:00 (apenas expedição)</p>
            </div>
            <div className="flex flex-col md:flex-row text-center md:justify-center text-lg md:text-base mb-8 md:mb-0">
                <HiOutlineEnvelope size={20}className="hidden md:flex"/>
                <HiOutlineEnvelope size={36} className="absolute left-60 -top-8 md:hidden" />
                
                <a href="mailto:comercial@pedreiracarrascoza.com.br" className="ml-1 md:ml-4 my-0.5 md:my-0">comercial@pedreiracarrascoza.com.br</a>
                <p className="mx-1 hidden md:block">|</p>
                <a href="mailto:financeiro@pedreiracarrascoza.com.br" className="ml-1 my-0.5 md:my-0">financeiro@pedreiracarrascoza.com.br</a>
                <p className="mx-1 hidden md:block">|</p> 
                <a href="mailto:expedicao@pedreiracarrascoza.com.br" className="ml-1 my-0.5 md:my-0">expedicao@pedreiracarrascoza.com.br</a>
                <p className="mx-1 hidden md:block">|</p> 
                <a href="compras@pedreiracarrascoza.com.br" className="ml-1 my-0.5 md:my-0">compras@pedreiracarrascoza.com.br</a>
            </div>

            <div className="flex flex-col md:flex-row text-center md:justify-center text-lg md:text-base">
                <MdPhone size={20} className="-my-1 md:my-0" />
                <p className="ml-1 md:ml-4 my-4 md:my-0">(Depto. Comercial)</p>
                <p className="ml-1">Daniel Merchan: (16)99153-2040</p>
                <p className="mx-1 hidden md:block">|</p> 
                <p className="ml-1">Daniel Orteiro: (16)99755-8373</p>
                <p className="mx-1 hidden md:block">|</p> 
                <p className="ml-1">Mateus: (16)99168-5568</p>
            </div>
        </footer>
    )
}