import logo from "../../../assets/logo-web.svg";
import searchIcon from "../../../assets/search-web.svg"
import facebookLogo from "../../../assets/facebook-web.svg";
import instagramLogo from "../../../assets/instagram-web.svg";

export function Header(){
    return (
        <header className="flex fixed top-0 left-0 p-4 w-1888 h-60 bg-[#D9D9D9]">
            <a href="/"><img id="logo" src={logo} alt="Pedreira Carrascoza" title="Pedreira Carrascoza" /></a>
            <div className="grid justify-items-center">                
                    <span>Rodovia Ângelo Cavalheiro, Km 04 - Cravinhos/SP<strong className="ml-28">(16)3951-1710</strong></span>
                    <div>            
                        <nav>                
                            <ul className="list-none bold uppercase px-32 py-8">
                                <li className="float-left"><a href="/">Home</a></li>       
                                <li className="inline-block">                                           
                                    <a href="javascript:void(0)" className="inline-block text-center no-underline">Quem Somos</a> 
                                        <div className="none absolute bg-[#D9D9D9] shadow-lg">
                                            <a href="sobre-nos">Sobre nós</a>
                                            <a href="sobre-nos">Missão</a>
                                            <a href="qualidade">Qualidade</a>       
                                        </div>                                     
                                </li> 
                                <li className="inline-block hover:{bg-[#1D2483] color-white}">                                                                    
                                    <a href="javascript:void(0)" className="inline-block text-center no-underline">Produtos</a>
                                    <div className="none absolute bg-[#D9D9D9] shadow-lg">
                                            <a href="rachao">Rachão</a>
                                            <a href="brita">Brita</a>
                                            <a href="pedrisco">Pedrisco</a>
                                            <a href="bica">Bica</a>
                                            <a href="areia">Areia</a>
                                    </div>           
                                </li>
                            <li><a className="inline-block text-center no-underline" href="/agrocar">Agrocar</a></li> 
                            <li className="inline-block">
                                <a href="javascript:void(0)" className="inline-block text-center no-underline">Localização</a>
                                <div className="none absolute bg-[#D9D9D9] shadow-lg">
                                    <a href="encontre-nos">Encontre-nos</a>
                                    <a href="cidades-atendidas">Cidades atendidas</a>
                                </div>                                
                            </li>                                                    
                            <li><a className="inline-block text-center no-underline" href="/contato">Contato</a></li>            
                        </ul>                                                                    
                    </nav>            
                    <div>
                        <input type="text" id="search-input" placeholder="Digite aqui o que está buscando..." /> 
                        <button className="bg-transparent border-none pt-20">
                            <img src={searchIcon} alt="Pesquise em nosso site" title="Pesquise em nosso site" />
                        </button>
                        <a className="no-underline" href="https://www.instagram.com/pedreiracarrascoza" target="_blank">
                            <img src={instagramLogo} alt="Instagram da Pedreira Carrascoza" title="Instagram da Pedreira Carrascoza"/>
                        </a>
                        <a className="no-underline" href="https://www.facebook.com/pedreiracarrascoza" target="_blank">
                            <img src={facebookLogo} alt="Facebook da Pedreira Carrascoza" title="Facebook da Pedreira Carrascoza"/>
                        </a>                
                    </div>   
                </div>
            </div>           
        </header>
    )
}