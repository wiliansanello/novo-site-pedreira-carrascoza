import { HiOutlineEnvelope } from 'react-icons/hi2';
import { MdPhone } from 'react-icons/md'

export function Footer(){

    return (
        <footer className="sm:px-1 lg:px-4 py-2 w-full sm:h-36 lg:h-32 bg-[#D9D9D9]">
            <div className="flex justify-center text-center mb-4">
                <p>2023 Pedreira Carrascoza LTDA © | </p>
                <p className="ml-1">Mapa do Site</p>
            </div>           
            <div className="flex md:justify-center text-center mb-8 md:mb-0">
                <p>Horário de Atendimento: </p>
                    <p className="ml-1">Segunda a Sexta: 6:00 às 17:00 </p>
                    <p className="mx-1 hidden md:block">|</p>
                    <p className="ml-1">Sábado: 6:00 às 11:00 (apenas expedição)</p>
            </div>
            <div className="flex justify-center">
                <HiOutlineEnvelope size={20} className="mt-1" />
                <p>
                    <a href="mailto:comercial@pedreiracarrascoza.com.br" className="ml-1">comercial@pedreiracarrascoza.com.br</a> | 
                    <a href="mailto:financeiro@pedreiracarrascoza.com.br" className="ml-1">financeiro@pedreiracarrascoza.com.br</a> | 
                    <a href="mailto:expedicao@pedreiracarrascoza.com.br" className="ml-1">expedicao@pedreiracarrascoza.com.br</a> | 
                    <a href="compras@pedreiracarrascoza.com.br" className="ml-1">compras@pedreiracarrascoza.com.br</a>
                </p>
            </div>
            <div className="flex justify-center">
                <MdPhone size={20} className="mt-1" />
                <p>(Depto. Comercial)</p>
                <p className="ml-1">Daniel: (16)99153-2040 | Mateus: (16)99168-5568</p>
            </div>
        </footer>
    )
}