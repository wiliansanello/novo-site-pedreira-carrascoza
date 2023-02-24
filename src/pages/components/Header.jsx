import { useState } from "react";

import logo from "../../../public/logo-web.svg";
import searchIcon from "../../../public/search-web.svg"
import facebookLogo from "../../../public/facebook-web.svg";
import instagramLogo from "../../../public/instagram-web.svg";
import Image from "next/image";
import { RxHamburgerMenu, RxChevronDown } from "react-icons/rx"


export function Header(){

    const [element, setElement] = useState('');
    const [visible, setVisible] = useState('hidden');
    const [display, setDisplay] = useState('none');
    const [direction, setDirection] = useState('row');

    function setMenuVisible(e){
        const target = e.target.id
        
        console.log(target, element);

        if (target === 'whoarewe') { 
            setElement('whoarewe-dropdown')
         }  else if(target === 'products') {
            setElement('products-dropdown')
         }  else if(target === "location") {
            setElement('location-dropdown')
         } 
                          
        setVisible('visible');
        setDisplay('flex');
        setDirection('column');  
        
        if(element){
            document.getElementById(element).style.visibility = visible;
            document.getElementById(element).style.display = display;
            document.getElementById(element).style.flexDirection = direction;  
        }      
    }

    function setMenuHidden(e) {

        const target = e.target.id;

        if (target === 'whoarewe') { 
            setElement('whoarewe-dropdown')
         }  else if(target === 'products') {
            setElement('products-dropdown')
         }  else if(target === "location") {
            setElement('location-dropdown')
         } 
   
        setVisible('hidden');
        setDisplay('none');
        setDirection('row');        

        if(element){
            document.getElementById(element).style.visibility = visible;
            document.getElementById(element).style.display = display;
            document.getElementById(element).style.flexDirection = direction;
        } 
    }

    function showSearchBar(){
        document.getElementById("search-input").removeAttribute("hidden");
    }

    function showMobileMenu(){
       
        setElement('mobile-menu');
        setVisible('visible');
        setDisplay('flex')

        if(element){
            document.getElementById(element).style.visibilty = visible;
            document.getElementById(element).style.display = display;
        }
    }

    return (        

        <header className="flex fixed z-10 sm:px-1 lg:px-4 py-2 w-full sm:h-36 lg:h-20 bg-[#D9D9D9]">
            <a href="/">
                <Image className="z-40 lg:ml-4 sm:max-w-sm lg:w-48" src={logo} alt="Pedreira Carrascoza" title="Pedreira Carrascoza" />
            </a>


            <div className="grid justify-items-center sm:pl-0 lg:pl-20">                         
                    <div className="sm:flex flex-col lg:inline-block">
                        <div className="sm:flex lg:hidden no-underline ml-[29rem]">
                            <a className="no-underline" href="https://www.instagram.com/pedreiracarrascoza" target="_blank">
                                <Image src={instagramLogo} width="64" height="64" alt="Instagram da Pedreira Carrascoza" title="Instagram da Pedreira Carrascoza"/>
                            </a>
                            <a className="no-underline" href="https://www.facebook.com/pedreiracarrascoza" target="_blank">
                                <Image src={facebookLogo} width="64" height="64" alt="Facebook da Pedreira Carrascoza" title="Facebook da Pedreira Carrascoza"/>
                            </a>  
                        </div>               
                        <span className="sm:text-xl lg:text-base sm:ml-4 sm:-mt-16">Rodovia Ângelo Cavalheiro, Km 04 - Cravinhos/SP</span><span><strong className="lg:ml-8 sm:ml-32 sm:text-2xl lg:text-base">(16)3951-1710</strong></span>
                    </div>                    
                    <div className="flex sm:pt-1.5 lg:-mt-8 ">            
                        <nav>
                            <div className="flex flex-col">
                            <button className="sm:block lg:hidden" onClick={(showMobileMenu)}>
                                <RxHamburgerMenu size={40} className="-ml-[29.75rem]"/>                              
                            </button>
                            <span className="inline text-xl -ml-[30rem]">Menu</span> 
                            <div id="mobile-menu" className="hidden">
                                <ul className="list-none z-40 uppercase py-4 w-screen text-2xl text-center font-bold -ml-[30.50rem] bg-[#D9D9D9]">
                                    <li>
                                        <a href="/">Home</a>
                                        <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                    </li>
                                    <li>
                                        <div className="flex ml-[22rem]">
                                            <a href="#">Quem somos</a>
                                            <RxChevronDown color="black" size={24}/>
                                        </div>
                                        <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                        <ul className="text-center ml-8 font-normal">
                                            <li>
                                                <a href="#">Sobre nós</a>
                                                <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                            </li>
                                            <li>
                                                <a href="#">Missão</a>
                                                <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                            </li>
                                            <li>
                                                <a href="#">Qualidade</a>
                                                <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="flex ml-[22rem]">
                                            <a href="#">Produtos</a>
                                            <RxChevronDown color="black" size={24}/>
                                        </div>
                                        <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                        <ul className="text-center ml-8 font-normal">
                                            <li>
                                                <a href="#">Rachão</a>
                                                <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                            </li>
                                            <li>
                                                <a href="#">Brita</a>
                                                <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                            </li>
                                            <li>
                                                <a href="#">Pedrisco</a>
                                                <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                            </li>
                                            <li>
                                                <a href="#">Bica</a>
                                                <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                            </li>
                                            <li>
                                                <a href="#">Areia</a>
                                                <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                            </li>
                                            <li>
                                                <a href="#">Agrocar</a>
                                                <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                            </li>
                                        </ul>    
                                    </li>
                                    <li>
                                        <div className="flex ml-[22rem]">
                                            <a href="#">Localização</a>
                                            <RxChevronDown color="black" size={24}/>
                                        </div>
                                        <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                        <li>
                                            <a href="#">Cidades Atendidas</a>
                                            <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                        </li>
                                        <li>
                                            <a href="#">Encontre-nos</a>
                                            <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                        </li>
                                    </li>
                                    <li>
                                        <a href="#">Contato</a>
                                        <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                    </li>
                                </ul>
                                </div>
                            </div>

                                           
                            <ul className="lg:flex list-none uppercase py-4 cursor-pointer sm:hidden">
                                <li className="float-left font-bold px-8 hover:bg-black hover:text-white duration-200">
                                    <a href="/">Home</a>
                                 </li>       
                                <li className="px-8 hover:bg-black hover:text-white duration-200">                                           
                                    <a id="whoarewe" href="#" className="font-bold no-underline" onMouseEnter={setMenuVisible} onMouseLeave={setMenuHidden}>Quem Somos</a> 
                                    <ul 
                                        id="whoarewe-dropdown"
                                        onMouseLeave={setMenuHidden}
                                        className="hidden py-2 -ml-4 absolute bg-[#D9D9D9] shadow-lg text-center text-black capitalize w-40"
                                    >                                         
                                        <li className="hover:bg-black hover:text-white transition-500">
                                            <a href="/#sobre-nos">Sobre nós</a>
                                            <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                        </li>
                                        
                                        <li className="hover:bg-black hover:text-white transition-500">
                                            <a href="/#missao">Missão</a>
                                            <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]"/>
                                        </li>
                                        
                                        <li className="hover:bg-black hover:text-white transition-500">
                                            <a href="/qualidade">Qualidade</a>
                                            <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]" />
                                        </li>       
                                    </ul>                                     
                                </li> 
                                <li className="px-8 hover:bg-black hover:text-white duration-200">                                                                    
                                    <a id="products" href="/produtos" className="font-bold no-underline" onMouseEnter={setMenuVisible} onMouseLeave={setMenuHidden}>Produtos</a>
                                    <ul 
                                        id="products-dropdown"
                                        onMouseLeave={setMenuHidden} 
                                        className="hidden py-2 -ml-4 absolute bg-[#D9D9D9] shadow-lg text-center text-black capitalize w-40"
                                    >
                                        <li className="hover:bg-black hover:text-white"> 
                                            <a href="rachao">Rachão</a>
                                            <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]" />
                                        </li>                                            
                                        <li className="hover:bg-black hover:text-white">
                                            <a href="brita">Brita</a>
                                            <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]" />
                                        </li>                                            
                                        <li className="hover:bg-black hover:text-white">
                                            <a href="pedrisco">Pedrisco</a>
                                            <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]" />
                                        </li>
                                        <li className="hover:bg-black hover:text-white">
                                            <a href="bica">Bica</a>
                                            <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]" />
                                        </li>                        
                                        <li className="hover:bg-black hover:text-white">
                                            <a href="areia">Areia</a>
                                            <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]" />
                                        </li>    
                                    </ul>           
                                </li>
                            <li><a className="inline-block px-8 text-center font-bold no-underline hover:bg-black hover:text-white duration-200" href="/agrocar">Agrocar</a></li> 
                            <li className="px-8 hover:bg-black hover:text-white duration-200">
                                <a id="location" href="#" className="font-bold no-underline hover:text-white" onMouseEnter={setMenuVisible} onMouseLeave={setMenuHidden}>Localização</a>
                                <ul 
                                    id="location-dropdown" 
                                    className="hidden py-2 -ml-4 absolute bg-[#D9D9D9] shadow-lg text-center text-black capitalize w-40" 
                                    onMouseLeave={setMenuHidden}
                                >
                                    <li className="hover:bg-black hover:text-white">
                                        <a href="/cidades-atendidas">Cidades atendidas</a>
                                        <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]" />
                                    </li>
                                    <li className="hover:bg-black hover:text-white">                                    
                                    <a href="/encontre-nos">Encontre-nos</a>
                                    <div className="mx-8 py-1 border-b-2 border-[#9B8F8F]" />
                                    </li>
                                    
                                </ul>                                
                            </li>                                                    
                            <li><a className="inline-block text-center font-bold no-underline hover:bg-black hover:text-white px-8 duration-200" href="/contato">Contato</a></li>            
                        </ul>                                                                    
                    </nav>  
                    <input 
                        className="h-8 mt-1 text-sm hidden" 
                        type="text" 
                        id="search-input" 
                        placeholder="Digite aqui o que está buscando..." 
                    />           
                    <div className="lg:flex sm:hidden">                        
                        <button className="bg-transparent border-none" onClick={showSearchBar}>
                            <Image src={searchIcon} alt="Pesquise em nosso site" title="Pesquise em nosso site" />
                        </button>
                        <a className="no-underline" href="https://www.instagram.com/pedreiracarrascoza" target="_blank">
                            <Image src={instagramLogo} alt="Instagram da Pedreira Carrascoza" title="Instagram da Pedreira Carrascoza"/>
                        </a>
                        <a className="no-underline" href="https://www.facebook.com/pedreiracarrascoza" target="_blank">
                            <Image src={facebookLogo} alt="Facebook da Pedreira Carrascoza" title="Facebook da Pedreira Carrascoza"/>
                        </a>                
                    </div>                       
                </div>
            </div>           
        </header>
    )
}