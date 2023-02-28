import { useState } from "react";

import logo from "../../../public/logo-web.svg";
import searchIcon from "../../../public/search-web.svg"
import facebookLogo from "../../../public/facebook-web.svg";
import instagramLogo from "../../../public/instagram-web.svg";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx"

import { WebMenu } from './WebMenu';

export function Header(){ 
    
    const [element, setElement] = useState('');
    const [visible, setVisible] = useState('hidden');
    const [display, setDisplay] = useState('none');

    function showSearchBar(){
        document.getElementById("search-input").style.visibilty('visible');
    }

    function showMobileMenu(){
       
        setElement('web-menu');
        setVisible('visible');
        setDisplay('flex')

        if(element){
            document.getElementById(element).style.visibilty = visible;
            document.getElementById(element).style.display = display;
        }
    }

    return (        

        <header className="flex fixed z-10 sm:px-1 lg:px-4 py-2 w-screen sm:h-36 lg:h-20 bg-[#D9D9D9]">
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
                        <span className="sm:text-xl lg:text-base sm:ml-4 lg:-ml-[30rem] sm:-mt-16">Rodovia Ângelo Cavalheiro, Km 04 - Cravinhos/SP</span><span><strong className="lg:ml-8 sm:ml-32 sm:text-2xl lg:text-base">(16)3951-1710</strong></span>
                    </div>

                    <div className="flex sm:pt-1.5 lg:-mt-8 ">            
                        <nav>
                            <div className="flex flex-col">
                                <button className="sm:block lg:hidden" onClick={(showMobileMenu)}>
                                    <RxHamburgerMenu size={40} className="-ml-[29.75rem]"/>                              
                                </button>
                                <span className="inline text-xl -ml-[30rem]">Menu</span> 

                                {/*<div id="mobile-menu" className="hidden">
                                    <ul className="list-none z-40 uppercase py-4 w-screen text-2xl text-center font-bold -ml-[30.50rem] bg-[#D9D9D9]">
                                     </ul>                                                                  
                                </div>*/}

                                <ul id="web-menu" className="lg:flex lg:flex-row sm:flex-col list-none uppercase py-4 sm:w-screen sm:text-2xl md:text-base cursor-pointer sm:hidden"> 
                                    <li className="px-8 hover:bg-black hover:text-white duration-200">                               
                                        <WebMenu menuOption={ {url:"/", description: 'Home'} } />
                                    </li>
                                    <li className="px-8 hover:bg-black hover:text-white duration-200">
                                        <WebMenu 
                                            menuOption={ {url : '#', description: 'Quem Somos', id:'whoarewe'} }
                                            subMenu={ 
                                                [
                                                    { url: '/#sobre-nos', description: 'Sobre nós' },
                                                    { url: '/#missao', description: 'Missão' },
                                                    { url: '/#qualidade', description: 'Qualidade'}
                                                ] 
                                            }
                                        />
                                    </li>                                  
                                    <li className="px-8 hover:bg-black hover:text-white duration-200">
                                        <WebMenu
                                            menuOption={{url: '/#produtos', description: 'Produtos', id:'products'}}
                                            subMenu={
                                                [
                                                    {url: '/#rachao', description: 'Rachão'},
                                                    {url: '/#brita', description: 'Brita'},
                                                    {url: '/#pedrisco', description: 'Pedrisco'},
                                                    {url: '/#bica', description: 'Bica'},
                                                    {url: '/#areia', description: 'Areia'}
                                                ]
                                            }
                                        />
                                    </li>
                                    <li className="px-8 hover:bg-black hover:text-white duration-200">
                                        <WebMenu menuOption={{url:'/#agrocar', description: 'Agrocar'}} />
                                    </li>
                                    <li className="px-8 hover:bg-black hover:text-white duration-200">
                                        <WebMenu
                                            menuOption={{url:'#', description:'Localização', id:'location'}}
                                            subMenu={
                                                [
                                                    {url:'/#cidades-atendidas', description:'Cidades Atendidas'},
                                                    {url:'/#encontre-nos', description:'Encontre-nos'}
                                                ]
                                            }
                                        />
                                    </li>
                                    <li className="px-8 hover:bg-black hover:text-white duration-200">
                                        <WebMenu  menuOption={{url:'/#contato', description:'Contato'}}/>  
                                    </li>                        
                                </ul>
                            </div>                      
                                                                                                
                    </nav>

                    <input 
                        className="h-8 mt-1 text-sm hidden" 
                        type="text" 
                        id="search-input" 
                        placeholder="Digite aqui o que está buscando..." 
                    />           
                    <div className="lg:flex sm:hidden">                        
                        <button id="search-input" className="border-none -mt-14 -ml-[28rem]" onClick={showSearchBar}>
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