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

        <header className="md:flex fixed z-10 sm:px-1 md:px-4 md:py-2 lg:w-screen sm:h-36 lg:h-20 bg-[#D9D9D9]">
            <a href="/">
                <Image className="z-40 ml-2 mt-2 sm:w-32 md:max-w-md" src={logo} alt="Pedreira Carrascoza" title="Pedreira Carrascoza" />
            </a>


            <div className="block justify-items-center ">                         
                    <div className="sm:flex flex-col md:inline-block">                           
                        <div className="sm:flex md:inline-flex px-24 md:px-[44rem] text-base">
                            <p className="-ml-8 md:-ml-[30rem] ">Rodovia Ângelo Cavalheiro, Km 04</p>
                            <p className="px-8 md:px-1"> Cravinhos/SP</p>
                            <strong className="md:ml-8 sm:ml-32 text-2xl md:text-base">(16)3951-1710</strong>
                        </div>
                    </div>

                    <div className="flex sm:pt-1.5 lg:-mt-8 ">            
                        <nav>
                            <div className="flex flex-col">
                                <button className="block md:hidden" onClick={(showMobileMenu)}>
                                    <RxHamburgerMenu size={40} className="-mt-24 -ml-[29.75rem]"/>                              
                                </button>
                                <span className="inline text-xl -ml-[30rem]">Menu</span> 

                                {/*<div id="mobile-menu" className="hidden">
                                    <ul className="list-none z-40 uppercase py-4 w-screen text-2xl text-center font-bold -ml-[30.50rem] bg-[#D9D9D9]">
                                     </ul>                                                                  
                                </div>*/}

                               
                                <ul id="web-menu" className="md:flex list-none uppercase py-4 sm:w-screen text-2xl md:text-base cursor-pointer hidden"> 
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
                                                    {url: '/#areia', description: 'Areia'},
                                                    {url: '/#po-de-basalto', description: 'Pó de Basalto'}
                                                ]
                                            }
                                        />
                                    </li>
                                    <li className="px-8 hover:bg-black hover:text-white duration-200">
                                        <WebMenu menuOption={{url:'/#ambiental', description: 'Ambiental'}} />
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
                    <div className="inline-flex">
                        <input 
                            className="h-8 mt-4 mb-2 md:mt-1 ml-32 w-48 text-sm" 
                            type="text" 
                            id="search-input" 
                            placeholder="Digite aqui o que está buscando..." 
                        />                                            
                        <button id="search-input" className="border-none -mt-14 -ml-[28rem]" onClick={showSearchBar}>
                            <Image src={searchIcon} alt="Pesquise em nosso site" title="Pesquise em nosso site" />
                        </button>
                    </div>  

                    <div className="z-10 -mt-32 md:mt-48 ml-72 inline-flex md:flex">                    
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